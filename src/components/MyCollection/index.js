import React, {useState, useEffect} from 'react';
import lion1 from '../../assets/images/lion1.png';
import NavBar from '../NavBar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import lion2 from '../../assets/images/lion2.png';
import lion3 from '../../assets/images/lion3.png';
import lion4 from '../../assets/images/lion4.png';
import lion5 from '../../assets/images/lion5.png';
import { useConnectWallet } from '@web3-onboard/react'
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

const imgdiv = {
    width: "190px",
    // margin: "10px",
    textAlign: 'center',
    margin: '0px 10px'
}

const imgcircle = {
    borderRadius: '50%',
    width: '72px', /* adjust size as needed */
    height: '72px',
    objectFit: 'cover',
    margin: '0px 10px 14px 10px'
}

const lionimg = {
    width: '190px',
    marginBottom: '10px',
    height: '212px',
    borderRadius: '8px'
}

const MyCollection = (props) => {
    const [key, setKey] = useState('home');
    const [tokens, setTokens] = useState([]);
    const [data, setData] = useState([]);
    const [roarPoints, setRoarPoints] = useState();

    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

    // console.log('REACT_APP_LAZY_CUBS_ADDRESS');
    // console.log(process.env.REACT_APP_LAZY_CUBS_ADDRESS);

    const imageChange = (imagename, background) => {
        props.onQuery({imagename, background});
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
        // localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjc4NTcyNTQxfQ.ltmg6__9vZG2o8x7VOdzJmk2Q6Z9yxWvERuM47e-o5w');
        if(tokens.length > 0){

            tokens.map((token) =>{
                    // console.log('map'+token);
                    axios.get(`https://ipfs.io/ipfs/QmNpHFmk4GbJxDon2r2soYpwmrKaz1s6QfGMnBJtjA2ESd/${token}`)    
                        .then(response => {
                            console.log(response.data);

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

    useEffect(() => {

        const storedValue = localStorage.getItem('token');
        if(data.length === tokens.length && storedValue){

        const formattedData = { nfts: data.map(( datanft_id ) => ({ collection_id: 1, nft_id: parseInt(datanft_id.name.replace('#', '')) })) };

            axios.post("http://18.225.2.150:3000/user_nfts", formattedData,
            {headers: {
                'authorization': "Bearer "+storedValue,
                'content-type': 'application/json',
                'http-equiv':"Content-Security-Policy",
                'content':"upgrade-insecure-requests"
            }
            })    
            .then(response => {
                    axios.get("http://18.225.2.150:3000/user_nfts",
                    {headers: {
                        'authorization': "Bearer "+storedValue,
                        'content-type': 'application/json',
                        'http-equiv':"Content-Security-Policy",
                        'content':"upgrade-insecure-requests"
                    }
                    })    
                        .then(response => {
                            // console.log('nfts response');
                            // console.log(response.data.points[1]);
                            props.onQueryPoints(response.data.points[1]);
                        });
            });

        }
    }, [data]);

    console.log(data);
    console.log('data');

    return (
            <div style={container}>
                <div  className=''>
                    <div className='w-100 text-start'>
                        <h4 style={{fontWeight: '700', fontSize: '24px'}} className='mb-4'>MY COLLECTION</h4>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                            >
                            <Tab eventKey="home" title={'All '+data.length}>
                                <div className='d-flex flex-wrap mt-5'>
                                {data && data.map((lion)=>
                                    <div style={imgdiv} >
                                        <img className='galleryImg' onClick={() => imageChange(lion.imageURL, "#"+lion.backgrounColor)} style={lionimg} src={lion.imageURL}/>
                                        <span style={{fontFamily: 'Barlow',fontSize: '16px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '24px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                )
                                }
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title={'Lazy Lions '+data.length}>
                                <div className='d-flex flex-wrap mt-5'>
                                {data && data.map((lion)=>
                                    <div style={imgdiv} >
                                        <img className='galleryImg' style={lionimg} src={lion.imageURL}/>
                                        <span style={{fontFamily: 'Barlow',fontSize: '16px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '24px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                    </div>
                                )
                                }
                                </div>  
                            </Tab>
                            <Tab eventKey="Clubs" title="Lazy Clubs 0"> 
                                {/* <div style={imgdiv} >
                                        <img style={lionimg} src={lion2}/>
                                        <span style={{fontFamily: 'Barlow',fontSize: '16px', fontWeight:'100'}}>Lazy Lions</span>
                                        <p style={{fontSize: '24px',fontWeight: '700'}} className='font-weight-bold'>#7854</p>
                                </div> */}
                            </Tab>
                            <Tab eventKey="Drinks" title="Lazy Drinks 0">
                                
                            </Tab>
                            <Tab eventKey="Bungalows" title="Lazy Lions Bungalows 0">
                                
                            </Tab>
                        </Tabs>
                  
                    </div>
                </div>
            </div>
    );
};

export default MyCollection;