import React from'views/SdInformation/components/node_modules/react';
import Dialog from 'views/SdInformation/components/node_modules/@material-ui/core/Dialog'
import DialogActions from 'views/SdInformation/components/node_modules/@material-ui/core/DialogActions';
import DialogContent from 'views/SdInformation/components/node_modules/@material-ui/core/DialogContent';
import DialogTitle from 'views/SdInformation/components/node_modules/@material-ui/core/DialogTitle';
import Button from 'views/SdInformation/components/node_modules/@material-ui/core/Button';
import Typography from 'views/SdInformation/components/node_modules/@material-ui/core/Typography';


class CustomerDelete extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     open: false
    //     }
    //     this.handleClickOpen = this.handleClickOpen.bind(this)
    //     this.handleClose = this.handleClose.bind(this);
    // }

    // handleClickOpen = () => {
    //     this.setState({
    //         open:true
    //     });
    // }

    // handleClose = () => {
    //     this.setState({
    //         open:false
    //     })
    // }    

    // deleteCustomer(id){
    //     const url = '/api/customer/' + id;
    //     fetch(url, {
    //         method: 'DELETE'
    //     });
    //     this.props.stateRefresh();
    // }

    // render() {
    //     return (
    //         <div>
    //            <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
    //             삭제
    //             </Button>
    //             <Dialog onClose={this.handleClose} open={this.state.open}>
    //                 <DialogTitle onClose={this.handleClose}>
    //                     삭제 경고
    //                 </DialogTitle>
    //                 <DialogContent>
    //                     <Typography gutterBottom>
    //                         선택한  정보가 삭제됩니다.
    //                     </Typography>
    //                 </DialogContent>
    //                 <DialogActions>
    //                     <Button variant="contained" color="primary" onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</Button>
    //                     <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
    //                 </DialogActions>
    //             </Dialog>
    //         </div>
            
    //     )
    // }
}

export default CustomerDelete;
