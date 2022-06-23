import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ""
        }
    };
    

    handleChange = evt => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [evt.target.name]: evt.target.value
            }
        });
    };

    login = evt => {
        evt.preventDefault()
        axios.post('http://localhost:9000/api/login', this.state.credentials)
        .then(res => {
            // console.log(res, "this is my login log");
            localStorage.setItem("token", res.data.token);
            this.props.history.push("/friends");
        })
        .catch(err => {
            console.log(err);
        })
    };

    render () {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.login}>
                    <div>
                        <label htmlFor="username">Username </label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                            autoComplete="username"
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password </label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                            autoComplete='current-password'
                        />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;