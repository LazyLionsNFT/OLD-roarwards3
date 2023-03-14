import React, { useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import axios from 'axios';

const Discord = () => {
    const params = useParams();

    const member_id = params.member_id;


    useEffect(() => {
        if(member_id){
            const storedValue = localStorage.getItem('token');
                axios.post("http://18.225.2.150:3000/updateDiscordRole", {memberId: member_id},
                {headers: {
                    'authorization': "Bearer "+storedValue,
                    'content-type': 'application/json',
                    'http-equiv':"Content-Security-Policy",
                    'content':"upgrade-insecure-requests"
                }
                })    
                    .then(() => {
                        window.location.href = '/'
                    });
        }
    }, [member_id]);
 
    return (
        <div>
        </div>
    );
};

export default Discord;