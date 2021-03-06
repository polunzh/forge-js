/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const util = require('util');
const GRpcClient = require('../');
const pretty = data => util.inspect(data, { depth: 8, colors: false, compact: false });
const { enums } = require('@arcblock/forge-proto');
const client = new GRpcClient({ endpoint: 'tcp://127.0.0.1:28210' });

const rpcMethods = client.getRpcMethods();
// const shortcutMethods = []; // client.getShortcutMethods();

const generateEnumDocs = () => `## Enums
${Object.keys(enums)
  .map(
    x => `
### ${x}

\`\`\`js
${pretty(enums[x])}
\`\`\`
`
  )
  .join('')}`;

const generateMethodDocs = (title, methods) => `
## ${title} Methods

> RPC response contains an \`code\` field, when \`code=0\` means success
> Binary data in RPC response are \`UInt8Array\` instance and can be safely encoded to base64 string

${Object.keys(methods)
  .sort()
  .map(x => {
    const method = client[x];
    const { responseStream } = method.meta;
    const result = responseStream ? 'stream' : 'result';
    const _await = responseStream ? '' : 'await ';

    return `
### ${x}

\`\`\`js
const ${result} = ${_await}client.${x}(${pretty(method.$requestExample())});
${
  responseStream
    ? `
// output
${pretty(method.$responseExample())}
`
    : `
// response is a stream
${result}.on('data', data => {
  // response data format
  ${pretty(method.$responseExample())}
});
`
}
\`\`\`
`;
  })
  .join('')}
`;

fs.writeFileSync(
  './docs/API.md',
  `# API Documentation

## Table of Contents

${generateEnumDocs()}

${generateMethodDocs('RPC', rpcMethods)}
`
);

console.log('generated api documentation to docs/API.md');
