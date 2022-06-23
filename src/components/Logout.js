import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';

import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = () => {
    const { push } = useHistory();
    useEffect(() => {
        axiosWithAuth().post('/logout',{}, {
            headers: { authorization: localStorage.getItem("token")}
        })
            .then(res => {
                // console.log(res, 'this is my logout log')
                localStorage.removeItem("token")
                push('/login')
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <div></div>
    )
}

export default Logout;