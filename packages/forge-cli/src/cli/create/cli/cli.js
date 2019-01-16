/* eslint no-console:"off" */
const inquirer = require('inquirer');
const path = require('path');
const shell = require('shelljs');

const { readdirSync, statSync } = require('fs');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

const cliPath = path.join(__dirname, '../../');
const getDirs = p => readdirSync(p).filter(f => statSync(path.join(p, f)).isDirectory());

const questions = [
  {
    type: 'text',
    name: 'name',
    message: 'name of the cli (use ":" to differentiate action and object. e.g. create:repo):',
    validate: input => {
      if (
        !input ||
        input.length < 6 ||
        (input.match(/:/g) || []).length !== 1 ||
        (input.match(/[^_a-z:]/g) || []).length !== 0
      ) {
        return 'input shall contain only 1 ":" and lowercase characters and at least 6 chars';
      }
      return true;
    },
  },
  {
    type: 'text',
    name: 'description',
    message: 'Please write concise description:',
    validate: input => {
      if (!input || input.length < 10) return 'Description should be more than 10 characters long';
      return true;
    },
  },
  {
    type: 'confirm',
    name: 'requireRelease',
    message: 'Does this command require an forge-core release to work?',
    format: x => (x ? 1 : 0),
  },
  {
    type: 'confirm',
    name: 'requireRpcClient',
    message: 'Does this command require an rpc client to work?',
    format: x => (x ? 1 : 0),
  },
];

function regenerateIndex(p) {
  const dirs = getDirs(p);
  const indexFile = path.join(p, 'index.js');
  console.log(`Regenerating ${indexFile}`);

  const output = dirs.map(name => `exports.${name} = require('./${name}');`).join('\n');
  shell.exec(`echo "${output}" > ${indexFile}`);
}

function createArcli({ name: cliName, description, requireRelease, requireRpcClient }) {
  const [action, name] = cliName.split(':');
  const targetPath = path.join(cliPath, `${action}/${name}`);
  const templatePath = path.join(__dirname, 'templates');
  const env = `NAME="${name}" ACTION=${action} DESCRIPTION="${description}" REQUIRE_RELEASE=${requireRelease} REQUIRE_RPC_CLIENT=${requireRpcClient}`;

  shell.exec(`mkdir -p ${targetPath}`);
  shell.exec(`rsync -rt ${templatePath}/ ${targetPath}/`);
  shell.exec(`cd ${targetPath}; ${env} make -f .makefile mustache; rm .makefile;`);

  regenerateIndex(path.join(targetPath, '..'));
  regenerateIndex(path.join(targetPath, '../..'));

  console.log(`Code generated at: ${targetPath}`);
}

function run() {
  inquirer.prompt(questions).then(answers => {
    const { name, description, requireRelease, requireRpcClient } = answers;
    createArcli({ name, description, requireRelease, requireRpcClient });
  });
}

function execute(data) {
  const { name, description, requireRelease, requireRpcClient } = data;
  createArcli({ name, description, requireRelease, requireRpcClient });
}

exports.run = run;
exports.execute = execute;
