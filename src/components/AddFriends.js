import React, { useState } from 'react';
import axios from 'axios';

const AddFriends = () => {

    const [ form, setForm ] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = evt => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        axios.post('http://localhost:9000/api/friends',form, {
            headers: { authorization: localStorage.getItem('token') }
        })
            .then(res => {
                console.log(res, 'this is my add friend log')
            })
            .catch(err => {
                console.log(err)
            })
    }

    console.log(form)

    return ( 
        <div>
            <h2>Add a Friend</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name </label>
                    <input
                        id="name"
                        name="name"
                        onChange={handleChange} 
                    />
                </div>
                <div>
                   <label htmlFor='age'>Age </label>
                    <input 
                        id="age"
                        name="age"
                        onChange={handleChange}
                    /> 
                </div>
                <div>
                   <label htmlFor='email'>Email </label>
                    <input 
                        id="email"
                        name="email"
                        onChange={handleChange}
                    /> 
                </div>
                <button>Submit</button>
            </form>
        </div>
    
    )
}

export default AddFriends;