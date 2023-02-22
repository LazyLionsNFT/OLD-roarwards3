import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useConnectWallet } from '@web3-onboard/react'
import { ethers } from "ethers";
import Link from 'next/link';
import {useSession, signIn, signOut} from "next-auth/react"
import TwitterButton from '../components/twitterButton'
import { useEffect } from 'react';
import axios from 'axios';
// import Web3Modal from "web3modal";
import injectedModule from '@web3-onboard/injected-wallets'

const injected = injectedModule()

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

export default function Home() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  // create an ethers provider
  let ethersProvider

  if (wallet) {
    console.log(wallet);
    ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
    console.log(ethersProvider);
  }
  // set cacheProvider parameter as true when instantiating web3modal
  // const web3Modal = new Web3Modal({
  //   cacheProvider: true, // optional
  //   // providerOptions // required
  // });

  const callAPI = async () => {
		try {
        const address = { walletAddress: wallet?.accounts[0]?.address };
            const URL = await axios.post('http://3.144.152.191:3000/connect-wallet', address)
            .then(response => {
                console.log(response.data);
              });
               
			// console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

  useEffect(() => {
    callAPI();
  }, [wallet])

  return (
    <div className={styles.container}>
      <Head>
        <title>roarwards</title>
        <meta
          name="description"
          content="roarwards"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>{wallet?.accounts[0]?.address}</h3>
        {/* <h3>{wallet?.accounts[0]?.ens}</h3> */}
        {/* balance={wallet?.accounts[0]?.balance} */}
        {/* ens={wallet?.accounts[0]?.ens} */}
       { wallet &&
        <div>
          {/* <Link href='/'> */}
            {/* <button   onClick={() => signIn('twitter')}  style={twitterButton}>
            login In with Twitter
            </button> */}
            <TwitterButton/>
          {/* </Link> */}
          {/* <Link href='/'>
            <button     style={buttonStyles}>
            Sign In with Discord
            </button>
          </Link> */}
        </div>
      }
        <button
          style={buttonStyles}
          disabled={connecting}
          onClick={() => (wallet ? disconnect(wallet) : connect())}
        >
          {connecting ? 'Connecting' : wallet ? 'Disconnect' : 'Connect'}
        </button>
      </main>
    </div>
  )
}