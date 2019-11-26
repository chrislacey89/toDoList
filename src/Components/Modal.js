import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function Modal(props) {
  // const handleClose = () => {
  //   props.closeModal;
  // };

  return (
    <div>
      {/* <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={props.openModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.closeModal}
      >
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            The email address you entered already exists!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.closeModal} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Modal;
