import { Button } from 'bootstrap';
import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import twitter from '../../assets/images/icons/twiiter.png';
import { init, useConnectWallet, useAccountCenter } from '@web3-onboard/react'
import axios from 'axios';

const inputIcon = {
    background: 'none',
    borderRight: 'none',
    borderRadius: '26px 0px 0px 26px',
    padding: '10px 14px 10px 26px',
    borderColor: '#FAFAFA',
}
const inputField = {
    background: 'transparent',
    color: '#FAFAFA',
    borderLeft: 'none',
    borderRight: 'none',
    padding: '10px 0px',
    borderColor: '#FAFAFA',
}
const inputButton = {
    background: 'rgb(151, 35, 66)',
    borderLeft: 'none',
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
    borderTopRightRadius: '26px',
    borderBottomRightRadius: '26px',
    borderColor: '#FAFAFA',
    padding: '10px 32px 10px 26px'
}

const EmailModal = (props) => {

    const [inputValue, setInputValue] = useState(props.email);
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

    const storedValue = localStorage.getItem('token');

    function handleClick() {

        const storedValue = localStorage.getItem('token');
        if(storedValue){
            axios.post("http://18.225.2.150:3000/updateEmail",{email: inputValue},
                    {headers: {
                        'authorization': "Bearer "+storedValue,
                        'content-type': 'application/json',
                        'http-equiv':"Content-Security-Policy",
                        'content':"upgrade-insecure-requests"
                    }
                })    
                    .then(response => {
                        // console.log(response.data);
                        window.location.href = '/'
            });
        }    
      }

    function handleChange(event) {
        setInputValue(event.target.value);
      }

    return (
            <Modal
                show={props.open}
                onHide={props.close}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                centered
            >
                <Modal.Header closeButton closeVariant="white">
                <Modal.Title id="example-custom-modal-styling-title">
                    EDIT EMAIL ADDRESS
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p style={{marginTop: '-26px',fontWeight: '300'}}>
                    You can change your email adress
                </p>
                <div style={{fontFamily:'Barlow', textAlign: 'left', fontWeight: '300'}} className='mt-2 mb-5'>
                        <div class="input-group mt-4" style={{width:'90%', margin:'auto'}}>
                            <div class="input-group-prepend">
                                <span class="input-group-text" style={inputIcon}>
                                <img src={twitter} alt="Icon" />
                                </span>
                            </div>
                            <input style={inputField} value={inputValue} onChange={handleChange} type="email" class="form-control" placeholder="Enter Email"/>
                            <div class="input-group-append">
                                <button style={inputButton} class="btn btn-primary" onClick={handleClick} type="button">SUBMIT</button>
                            </div>
                        </div>

                        <div style={{margin: '18px 22px'}}  class="form-check">
                            <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
                            <label class="form-check-label">Show on public profile</label>
                        </div>
                </div>
                </Modal.Body>
            </Modal>
    );
};

export default EmailModal;