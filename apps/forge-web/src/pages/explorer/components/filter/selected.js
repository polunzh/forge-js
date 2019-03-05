import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useList } from 'react-use';

import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

import { fromTypeUrl } from '../../../../libs/util';

function SelectedList({ onChange, selectedTxs }) {
  const [selected, { set }] = useList(selectedTxs);

  const getHandler = type => () => {
    const updated = selected.filter(x => x !== type);
    set(updated);
    onChange(updated);
  };

  return (
    <SelectedContainer className="selected-types">
      <Typography component="p" className="title">
        Filter
      </Typography>
      {selected.map(x => (
        <Chip
          key={x}
          label={fromTypeUrl(x)}
          className="type-item"
          onDelete={getHandler(x)}
          variant="outlined"
        />
      ))}
    </SelectedContainer>
  );
}

SelectedList.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedTxs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const SelectedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .title {
    color: ${props => props.theme.colors.minor};
    text-transform: uppercase;
    margin-right: 16px;
  }

  .type-item {
    margin-right: 8px;
  }
`;

export default SelectedList;