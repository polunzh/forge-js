import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { withTheme } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import IconFa from '../../../../components/iconfa';
import { getExplorerUrl } from '../../../../libs/util';

const PokeTx = React.memo(({ tx, theme, ...rest }) => (
  <Container {...rest}>
    <div className="info-row">
      <Typography component="p" className="hash" title={tx.hash}>
        <Link to={getExplorerUrl(`/txs/${tx.hash}`)}># {tx.hash}</Link>
      </Typography>
      <Typography component="p" className="time" title={tx.time}>
        {moment(tx.time).fromNow()}
      </Typography>
    </div>
    <div className="info-row" style={{ justifyContent: 'flex-start' }}>
      <Tooltip title="Poke" placement="top">
        <IconFa
          name="check"
          size={14}
          rounded={true}
          color={theme.colors.blue}
          className="type-icon"
        />
      </Tooltip>
      <div className="sender">
        <Typography component="p" title={tx.tx.from}>
          <Link to={getExplorerUrl(`/accounts/${tx.tx.from}`)}>By: {tx.tx.from}</Link>
        </Typography>
      </div>
    </div>
  </Container>
));

const Container = styled.div`
  .info-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    &:nth-last-of-type() {
      margin-bottom: 0;
    }

    a {
      padding-bottom: 2px;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .time,
  .hash a,
  .type {
    color: ${props => props.theme.typography.color.gray};
    font-size: 12px;
  }

  .value,
  .sender {
    width: auto;
    max-width: 49%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    font-size: 14px;
    margin-right: ${props => props.theme.spacing.unit}px;
    color: ${props => props.theme.typography.color.gray};

    a {
      font-size: 14px;
      color: ${props => props.theme.typography.color.main};
    }
  }

  .type-icon {
    margin-right: 16px;
  }
`;

PokeTx.propTypes = {
  tx: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(PokeTx);