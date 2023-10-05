import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import { getActions } from '../store/alert/alert.actions';
import { connect } from 'react-redux';

const AlertNotification = ({ showAlertMessage, closeAlertMessage, alertMessageContent }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={showAlertMessage}
      onClose={closeAlertMessage}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
};

const mapStoreStateToProps = ({ alert }) => {
  return {
    ...alert,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

// prettier-ignore
export default connect(
  mapStoreStateToProps,
  mapDispatchToProps
)(AlertNotification);
