import React, {useState ,useEffect} from 'react';
import lion1 from '../../assets/images/lion1.png';
import NavBar from '../NavBar';
import twitter from '../../assets/images/icons/twiiter.png';
import discord from '../../assets/images/icons/discord.png';
import walleticon from '../../assets/images/icons/ic_eth.png';
import underline from '../../assets/images/underline.png';
import email from '../../assets/images/icons/email.png';
import { init, useConnectWallet, useAccountCenter } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import Web3 from 'web3';

const web3 = new Web3(window.ethereum);

const injected = injectedModule()
// Only one RPC endpoint required per chain
const rpcAPIKey = '<INFURA_KEY>' || '<ALCHEMY_KEY>'
const rpcUrl = `https://eth-mainnet.g.alchemy.com/v2/${rpcAPIKey}` || `https://mainnet.infura.io/v3/${rpcAPIKey}`
// initialize Onboard
init({
    connect: {
        autoConnectLastWallet: true
      },
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

const flex = {
   display: 'flex'
  }


const container = {
    width: '86%',
    margin: 'auto'
}

const rightContent = {
    width: '90%',
    marginLeft: 'auto'
}

const roarpoints = {
    fontFamily: 'Barlow Condensed',
    fontSize: '224px',
    color: '#CFA817',
    fontWeight: '900',
}
const barlow = {
    fontFamily: 'Barlow',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '44px',
    marginBottom: '35px'
}
const addresses = {
    background: 'rgba(250, 250, 250, 0.14)',
    borderRadius: '5px',
    fontSize: '14px',
    padding: '8px 10px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '245px'

}
const grid = {
    fontFamily: 'Barlow',
    fontStyle: 'normal',
    display: 'grid',
    gridGap: '14px',
    gridTemplateAreas:
       ` "box1 box2"
        "box3 box4"`,
    gridTemplateRows: '1fr 1fr',
    width: '80%'
}
const roarPoints = {
    marginBottom: '-58px',
    marginTop: '46px',
    fontFamily: 'Barlow',
    fontWeight: '300'
}


const TopSection = ({query}) => {

    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
    const updateAccountCenter = useAccountCenter()

    const main = {
        background: Object.keys(query).length == 0 ? '#1F1F1F' : '#'+query.background,
        margin: '26px',
        borderRadius: '30px',
        color: 'white'
    }  

    // console.log('REACT_APP_ADDRESS');
    // console.log(process.env.REACT_APP_LAZY_LIONS);

    const callAPI = () => {
        //   navigate('http://18.225.2.150:3000/auth/twitter')
          window.location.href = 'http://18.225.2.150:3000/auth/twitter';
            // navigate('/auth/twitter/12312312dqwe1212dqw121.asd121')
        };

    if (wallet) {
        //   console.log("updateAccountCenter :"+updateAccountCenter);
          updateAccountCenter({ minimal: true, enabled: false })
            // ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
          // console.log(ethersProvider);
        }

    return (
        <div style={main}>
            <div style={container}>
            <   NavBar/>
                <div  className='d-flex flex-row justify-content-center'>
                    <div className='w-50 text-center'>
                        <img style={Object.keys(query).length == 0  ? {width: "94%"} : {width: "84%"}} src={ Object.keys(query).length == 0 ? lion1 : query.imagename }/>
                    </div>
                    <div className='w-50 text-start mt-2 pl-4'>
                        <div style={rightContent}>
                            <h1 style={barlow}>David Gilmour</h1>
                            <div style={grid} className=' mt-3'>
                                <span onClick={() => (wallet ? null : connect())} style={addresses} className='font-weight-light connect-wallet'>
                                <img style={{marginRight: '8px'}} src={walleticon}/>
                                    {connecting ? 'connecting' : wallet ? wallet?.accounts[0]?.address : 'Click to connect Wallet'}
                                </span>
                                <span style={addresses} className='font-weight-light'>
                                <img style={{marginRight: '8px'}} src={twitter}/>
                                    Discord Not Connected
                                </span>
                                <span style={addresses} className='font-weight-light'>
                                <img style={{marginRight: '8px'}} src={email}/>
                                    test.example@gmail.com
                                </span>
                                <span onClick={callAPI}  style={addresses} className='font-weight-light connect-wallet.env'>
                                <img style={{marginRight: '8px'}} src={discord}/>
                                    Twitter Not Connected
                                </span>
                            </div>
                            <p style={roarPoints}>ROARpoints</p>
                            <h1 style={roarpoints}>0</h1>
                            <img style={{width: '92%', marginTop: '-48px'}} src={underline} alt="underline"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSection;