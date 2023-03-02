import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

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
let navigate = useNavigate();
  
    const callAPI = () => {
    //   navigate('http://18.225.2.150:3000/auth/twitter')
      window.location.href = 'http://18.225.2.150:3000/auth/twitter';
        // navigate('/auth/twitter/12312312dqwe1212dqw121.asd121')
	};

  return (
    <button style={twitterButton} onClick={callAPI}>Login with Twitter</button>
  );
};

export default TwitterButton;