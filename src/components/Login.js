import React, {useState} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const Login = (props) => {
    const [cred, setCred] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }
    const { push } = useHistory(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('click works')
        axios.post('http://localhost:5001/api/login', cred)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                push('/view');
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
    <ComponentContainer>
        <ModalContainer>
            <h1>Welcome to Blogger Pro</h1>
            <h2>Please enter your account information.</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input onChange={handleChange} name='username' id='username' />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input onChange={handleChange} type='password' name='password' id='password' />
                </div>
                <button id='submit'>Login</button>
                <p id='error'>error</p>
            </form>   
        </ModalContainer>
    </ComponentContainer>)
}


export default Login;

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password".
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display.
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page.
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`
