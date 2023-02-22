import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useConnectWallet } from '@web3-onboard/react'
import { ethers } from 'ethers'
import Link from 'next/link';

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

const wallet = () => {
    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

    // create an ethers provider
    let ethersProvider
  
    if (wallet) {
      console.log('hello');
      console.log(ethers);
      // ethersProvider = new ethers.providers.Web3Provider(wallet.provider)
    }

    
    return (
        <div className={styles.container}>

        <main className={styles.main}>
          <button
            style={buttonStyles}
            disabled={connecting}
            onClick={() => (wallet ? disconnect(wallet) : connect())}
          >
            {connecting ? 'Connecting' : wallet ? 'Disconnect' : 'Connect'}
          </button>
        </main>
      </div>
    );
}

export default wallet;