import React, { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

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

const TwitterButton = () => {
  const router = useRouter()

    const callAPI = () => {
      router.push('http://3.144.152.191:3000/auth/twitter')
	};

  return (
    <button style={twitterButton} onClick={callAPI}>Login with Twitter</button>
  );
};

export default TwitterButton;