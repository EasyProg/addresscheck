/**
 * Created by Михаил on 17.03.2018.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {checkAddress,setValidityEmpty} from '../actions/actions';
import Modal from 'react-modal';
const customStyles = {
    content :   {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        color                 : 'green',
        display               :'flex',
        flexDirection         :'column',
        alignItems            :'center'
                },
    button:    {
        borderRadius:'10px',
        backgroundColor:'#5a9cae',
        color:'white',
        width:'150px',
        height:'25px',
        border:'none'


    }
};
export class ValidityCheck extends Component {
constructor() {
    super();
    this.state =
    {
        value : ''
    }
}
checkValue(value) {
    if (value) this.props.checkValidity(this.state.value)
}
render() {
    const Fragment = React.Fragment;
    return     (
    <Fragment>
    {this.props.validity==='false'?<h3>Account is incorrect</h3>:null}
    <input type="text" placeholder="Type address here" onChange={(e)=>this.setState({value:e.target.value})}/>
    <button onClick={e=>this.checkValue(this.state.value)}>Далее ></button>
    <Modal isOpen={this.props.validity==='true'} contentLabel="Success" style={customStyles}>
    <h2>Validating account is correct!</h2>
    <button onClick={(e)=>this.props.setValidityEmpty()} style={customStyles.button}>Close</button>
    </Modal>
    </Fragment>)


}}

const mapStateToProps = (state) => {
    return {
        validity:state.validity
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkValidity:   (address) => dispatch(checkAddress(address)),
        setValidityEmpty:()=>dispatch(setValidityEmpty())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ValidityCheck)