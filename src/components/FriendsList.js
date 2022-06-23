import React, { useState, useEffect } from 'react';
import axios from 'axios'

const FriendsList = () => {

    const [ friends, setFriends ] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:9000/api/friends', {
            headers: 
                { authorization: localStorage.getItem("token") }
            })
            .then(res => {
                // console.log(res.data, 'this is my friends log')
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <div>
            <h2>Friends List</h2>
            <ul>
                {
                    friends.map((friend, idx) => {
                        return <li key={idx}>{friend.name} - {friend.age} - {friend.email}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default FriendsList;