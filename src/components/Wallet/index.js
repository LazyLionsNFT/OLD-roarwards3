import React, { useEffect } from 'react';
import axios from 'axios';
import { init, useConnectWallet } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
// import { ethers } from 'ethers'

const injected = injectedModule()
// Only one RPC endpoint required per chain
const rpcAPIKey = '<INFURA_KEY>' || '<ALCHEMY_KEY>'
const rpcUrl = `https://eth-mainnet.g.alchemy.com/v2/${rpcAPIKey}` || `https://mainnet.infura.io/v3/${rpcAPIKey}`
// initialize Onboard
init({
    // connect: {
    //     autoConnectLastWallet: true
    //   },
  wallets: [injected],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl
    }
  ]
})


const buttonStyles = {
    borderRadius: '6px',
    background: '#111827',
    border: 'none',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    color: 'white',
    padding: '14px 12px',
    marginTop: '40px',
    fontFamily: 'inherit'
  }
const twitterButton = {
  borderRadius: '6px',
  background: '#fff',
  border: '2px solid black',
  fontSize: '18px',
  fontWeight: '600',
  cursor: 'pointer',
  color: 'black',
  padding: '14px 12px',
  marginTop: '40px',
  fontFamily: 'inherit'
}

const Wallet = () => {
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

    // create an ethers provider
    let ethersProvider
  
    if (wallet) {
    //   console.log(wallet);
        // ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
      // console.log(ethersProvider);
    }
  return (
        <button
            style={buttonStyles}
            disabled={connecting}
            onClick={() => (wallet ? disconnect(wallet) : connect())}
        >
            {connecting ? 'connecting' : wallet ? 'Disconnect' : 'Connect'}
        </button>
  );
};

export default Wallet;