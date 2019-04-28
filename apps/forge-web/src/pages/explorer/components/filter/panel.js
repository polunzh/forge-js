import React from 'react';
import PropTypes from 'prop-types';
import useToggle from 'react-use/lib/useToggle';
import { withTheme } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';

import IconFa from '../../../../components/iconfa';
import FilterChooser from './chooser';

function FilterPanel({ supportedTxs, onApplyFilter, selectedTxs, theme }) {
  const [open, toggle] = useToggle(false);
  const onToggle = () => toggle();

  return (
    <React.Fragment>
      <IconButton onClick={onToggle} className="filter-trigger">
        <IconFa name="filter" size={18} color={open ? theme.colors.gray : theme.colors.minor} />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={onToggle}
        PaperProps={{
          style: {
            boxShadow: `-2px 16px 10px 0 rgba(0, 0, 0, ${theme.mode === 'light' ? 0.05 : 0.5})`,
            backgroundColor: theme.palette.background.default,
            width: '350px',
          },
        }}
        ModalProps={{
          hideBackdrop: false,
          BackdropProps: {
            invisible: true,
          },
        }}>
        <FilterChooser
          onClose={onToggle}
          onApplyFilter={onApplyFilter}
          supportedTxs={supportedTxs}
          selectedTxs={selectedTxs}
        />
      </Drawer>
    </React.Fragment>
  );
}

FilterPanel.propTypes = {
  supportedTxs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onApplyFilter: PropTypes.func.isRequired,
  selectedTxs: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.object.isRequired,
};

export default withTheme()(FilterPanel);
