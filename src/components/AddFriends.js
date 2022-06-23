import React from 'react';

const AddFriends = () => {
    return ( 
        <div>
            <h2>Add a Friend</h2>
            <form>
                <div>
                    <label htmlFor='username'>Username </label>
                    <input
                        id="username"
                        name="username" 
                    />
                </div>
                <div>
                   <label htmlFor='email'>Email </label>
                    <input 
                        id="email"
                        name="email"
                    /> 
                </div>
                <button>Submit</button>
            </form>
        </div>
    
    )
}

export default AddFriends;