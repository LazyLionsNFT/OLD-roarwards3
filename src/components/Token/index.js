import React, { useEffect } from 'react';
// import { useRouter } from 'next/router'
import { useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import { useConnectWallet } from '@web3-onboard/react'

const Token = () => {
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
    const params = useParams();

    const token = params.token;
    const address = wallet?.accounts[0]?.address;

    console.log(token);
    console.log(address);



    useEffect(() => {
        console.log('hello');
        if(address){
            if(token != 'token' && token != '[token]'){
                axios.post("http://18.225.2.150:3000/connect-wallet", {walletAddress: address},
                {headers: {
                    'authorization': "Bearer "+token,
                    'content-type': 'text/json',
                    'http-equiv':"Content-Security-Policy",
                    'content':"upgrade-insecure-requests"
                }
                })    
                    .then(response => {
                        console.log('twiiter response');
                        console.log(response);
                    });


                axios.get("http://18.225.2.150:3000/collections",
                    {headers: {
                        'authorization': "Bearer "+token,
                        'content-type': 'text/json',
                        'http-equiv':"Content-Security-Policy",
                        'content':"upgrade-insecure-requests"
                    }
                })    
                    .then(response => {
                            console.log('collection response');
                            console.log(response);
                    });
            }
        }
    }, [address,token]);
 
    return (
        <div>
            {/* <h3>token component</h3> */}
        </div>
    );
};

export default Token;