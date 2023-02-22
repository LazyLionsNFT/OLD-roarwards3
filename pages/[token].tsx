import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import { useConnectWallet } from '@web3-onboard/react'

const Token = () => {
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
    const router = useRouter()
    const token = router.asPath;
    const address = wallet?.accounts[0]?.address;

    console.log('token');
    console.log(address);
    console.log(token.slice(1));



    useEffect(() => {
        if(address && token != 'token' || token != '[token]'){
        axios.post("http://3.144.152.191:3000/connect-wallet", {walletAddress: address},
        {headers: {
            'Authorization': token.slice(1),
            'content-type': 'text/json'
        }
          })    
            .then(response => {
                console.log(response);
            });
        }
    }, [address,token]);
 
    return (
        <div>
            {/* <h3>token component</h3> */}
        </div>
    );
};

export default Token;