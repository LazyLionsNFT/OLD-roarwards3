import React from 'react';
import Wallet from '../Wallet';
import TwitterButton from '../TwitterButton';
import { useConnectWallet } from '@web3-onboard/react'

function Home() {
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  return (
    <div>
        { wallet &&
            <div>
                <h4>{wallet?.accounts[0]?.address}</h4>
            <TwitterButton/>
            </div>
        }
        {/* <Wallet/> */}
    </div>
  );
}

export default Home;
