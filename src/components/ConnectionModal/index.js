import { Button } from 'bootstrap';
import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import twitter from '../../assets/images/icons/twiiter.png';
import discord from '../../assets/images/icons/discord.png';
import walleticon from '../../assets/images/icons/ic_eth.png';
import popup from '../../assets/images/icons/popup.png';
import { init, useConnectWallet, useAccountCenter } from '@web3-onboard/react'
import axios from 'axios';

const connectionbox = {
    border: '1px solid #f1f1f1',
    textAlign: 'center',
    width: '90%',
    margin: 'auto',
    borderRadius: '35px'
}
const connectionButton = {
    background: '#972342',
    border: '#972342',
    color: '#f1f1f1',
    borderTopRightRadius: '22px',
    borderBottomRightRadius: '22px',
    padding: '8px 24px',
    marginRight: '-22px'
}
const paddingleftright = {
    padding: '0px 20px'
}
const walletConnectBox = {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '245px',
    width: 'min-content',
    display: 'inline-block',
    width: '183px',
    verticalAlign: 'sub'
}


const ConnectionModal = (props) => {

    const [userInfo, setUserInfo] = useState([]);
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

    const storedValue = localStorage.getItem('token');


    useEffect(()=>{
        const storedValue = localStorage.getItem('token');
        if(storedValue){
            axios.get("http://18.225.2.150:3000/currentUser",
                    {headers: {
                        'authorization': "Bearer "+storedValue,
                        'content-type': 'application/json',
                        'http-equiv':"Content-Security-Policy",
                        'content':"upgrade-insecure-requests"
                    }
                })    
                    .then(response => {
                        // console.log('current user')
                        setUserInfo(response.data.user);
            });
        }        

    },[]);  

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
                    MANAGE YOUR CONNECTIONS
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p style={{marginTop: '-26px',fontWeight: '300'}}>
                    You can connect or disconnect your socials and wallets.
                </p>
                <div style={{fontFamily:'Barlow', textAlign: 'left', fontWeight: '300'}}>
                    <h3 style={paddingleftright}>Socials</h3>
                    <p style={paddingleftright}>You can connect or disconnect your socials</p>

                        {/* <div style={connectionbox}>
                            <span style={{marginRight: '50px'}}  className='font-weight-light mr-4'>
                                <img style={{marginRight: '8px',width: '6%'}} src={twitter}/>
                                @example.com
                            </span>
                            <button style={connectionButton}>Connected</button>
                        </div> */}
                        <div style={connectionbox}>
                            <span style={{marginRight: storedValue ? '73px' : '43px'}}  className='font-weight-light mr-4'>
                                <img style={{marginRight: '8px',width: '6%'}} src={twitter}/>
                                Twitter.com
                            </span>
                            <button style={connectionButton}>{storedValue ? 'Connected' : 'Not Connected'}</button>
                        </div>
                        <div style={{margin: '18px 22px'}}  class="form-check">
                            <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
                            <label class="form-check-label">Show on public profile</label>
                        </div>

                        {/* <div style={connectionbox}>
                            <span style={{marginRight: '50px'}}  className='font-weight-light mr-4'>
                                <img style={{marginRight: '8px',width: '6%'}} src={discord}/>
                                @example.com
                            </span>
                            <button style={connectionButton}>Connected</button>
                        </div> */}
                        <div style={connectionbox}>
                            <span style={{marginRight: '40px'}}  className='font-weight-light mr-4'>
                                <img style={{marginRight: '8px',width: '6%'}} src={discord}/>
                                Discord.com
                            </span>
                            <button style={connectionButton}>Not Connected</button>
                        </div>
                        <div style={{margin: '18px 22px'}} class="form-check">
                            <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
                            <label class="form-check-label">Show on public profile</label>
                        </div>

                        <h3 style={paddingleftright} className='mt-4'>Wallets</h3>
                        <p style={paddingleftright}>You can associate more than one wallet address with your ROARwards account</p>

                        <div style={connectionbox}>
                            <span style={walletConnectBox}  className='font-weight-light mr-4'>
                                <img style={{marginRight: '6px',width: '10%', marginTop: '-4px'}} src={walleticon}/>
                                {wallet?.accounts[0]?.address}
                            </span>
                            <button style={connectionButton}>Connected</button>
                        </div>
                        <p   
                        onClick={
                            async () => {
                            props.close()
                            const walletsConnected = await connect()
                            console.log('connected wallets: ', walletsConnected)
                        }} 
                        style={paddingleftright} className='mt-4 d-flex add-new-wallet'> <img style={{marginRight: '8px',marginTop: '4px',width: '18px',width: '18px'}} src={popup}/>Add new wallet</p>
                </div>
                </Modal.Body>
            </Modal>
    );
};

export default ConnectionModal;