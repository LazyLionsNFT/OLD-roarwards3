import React from 'react';
import Wallet from '../Wallet';
import TwitterButton from '../TwitterButton';

function Home() {

  return (
    <div>
        {/* { wallet && */}
            <div>
            <TwitterButton/>
            </div>
        {/* } */}
        <Wallet/>
    </div>
  );
}

export default Home;
