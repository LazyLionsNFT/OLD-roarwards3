import React, {createContext, useState, useEffect} from 'react';
import NavBar from '../NavBar';
import lion2 from '../../assets/images/lion2.png';
import lion3 from '../../assets/images/lion3.png';
import lion4 from '../../assets/images/lion4.png';
import lion5 from '../../assets/images/lion5.png';
import { init, useConnectWallet, useAccountCenter } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import lazyLionABI from '../../LazyLionAbi.json';
import lionsBackgroundColors from '../../constants/lionsBackgroundColors.json';
import axios from 'axios';
import Web3 from 'web3';

const web3 = new Web3(window.ethereum);

const flex = {
   display: 'flex'
  }
const container = {
    width: '86%',
    margin: '66px auto',
    color: 'white'
}

const imgbox = {
    width: "22%",
    marginRight: "10px"
}

const imgcircle = {
    borderRadius: '50%',
    width: '72px', /* adjust size as needed */
    height: '72px',
    objectFit: 'cover',
    margin: '0px 10px 14px 10px'
}

const profileacvh = {
    width: '90%',
    marginLeft: 'auto'
}

const Gallery = ({ onQuery }) => {
    const [items, setItems] = useState('');
    const [tokens, setTokens] = useState([]);
    const [data, setData] = useState([]);

    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()


    const imageChange = (imagename, background) => {
        onQuery({imagename, background});
    }


    useEffect(() => {
        if(wallet){
            const address = wallet?.accounts[0]?.address;
        
            // Load the Lion contract instance
            const lionContract = new web3.eth.Contract(lazyLionABI, process.env.REACT_APP_LAZY_LIONS);
        
            // Get the tokens owned by the user
            lionContract.methods.tokensOfOwner(address).call().then(tokens => {
            
              setTokens(tokens);
            });
        }
    }, [wallet]);

    useEffect(() => {
        if(tokens.length > 0){

            tokens.map((token) =>{
                    // console.log('map'+token);
                    axios.get(`https://ipfs.io/ipfs/QmNpHFmk4GbJxDon2r2soYpwmrKaz1s6QfGMnBJtjA2ESd/${token}`)    
                        .then(response => {

                            const imageURL = response.data.image.replace("ipfs://", "https://ipfs.io/ipfs/");
                            let newObj;
                            lionsBackgroundColors.map((backgroundColor)=>{
                                if(backgroundColor.Background === response.data?.attributes[0].value){
                                    newObj = {
                                        "backgrounColor": backgroundColor['Lazy Lions'],
                                        "imageURL": imageURL, ...response.data,
                                         ...response.data
                                        }
                                }
                            })
                            setData(data => [...data, newObj] );
                        });
            });

        }
    }, [tokens,wallet]);

    return (
            <div style={container}>
                <div  className='d-flex flex-row justify-content-center'>
                    <div className='w-50 text-start'>
                        <h4 style={{fontWeight: '700', fontSize: '24px'}}>MY GALLERY</h4>
                        <div className='d-flex mt-4'>
                            {/* {data && data.map((lion)=>
                                <img onClick={() => imageChange(lion.imageURL, lion.backgrounColor)} style={imgbox} className='galleryImg' src={lion.imageURL}/>
                            )

                            } */}
                            <img onClick={() => imageChange(lion5,'#B97E9E')}  style={imgbox} className='galleryImg' src={lion5}/>
                            <img onClick={() => imageChange(lion3,'#938787')}  style={imgbox} className='galleryImg' src={lion3}/>
                            <img onClick={() => imageChange(lion4,'#544E4E')}  style={imgbox} className='galleryImg' src={lion4}/>
                            <img onClick={() => imageChange(lion5,'#B97E9E')}  style={imgbox} className='galleryImg' src={lion5}/>
                        </div>
                    </div>
                    <div className='w-50 text-start'>
                        <h4 style={{marginLeft: '75px',fontWeight: '700', fontSize: '24px'}}>PROFILE ACHIEVEMENTS</h4>
                        <div style={profileacvh} className='mt-4'>
                            <img style={imgcircle} src={lion2}/>
                            <img style={imgcircle} src={lion3}/>
                            <img style={imgcircle} src={lion4}/>
                            <img style={imgcircle} src={lion5}/>
                            <img style={imgcircle} src={lion4}/>
                            <img style={imgcircle} src={lion5}/>
                            <img style={imgcircle} src={lion2}/>
                            <img style={imgcircle} src={lion3}/>
                            <img style={imgcircle} src={lion4}/>
                            <img style={imgcircle} src={lion5}/>
                            <img style={imgcircle} src={lion4}/>
                            <img style={imgcircle} src={lion5}/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Gallery;