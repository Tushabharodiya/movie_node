import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL, USER_LOGIN } from '../constnt';

const Login = () => {
    // const [role, setrole] = useState(null)

    function getCookie(name) {
        let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }
    let navigate = useNavigate()

    let email = useRef();
    let password = useRef();

    let login = async (e) => {
        e.preventDefault()

        let user = {
            email: email.current.value,
            password: password.current.value,
        }
        console.log(user);

        let res = await axios.post(BASE_URL + USER_LOGIN, user, { withCredentials: true })
        const token = res.data.token;
        document.cookie = `token=${token}; path=/`;

        // Fetch profile data after login
        const profileResponse = await axios.get('http://localhost:3001/v1/user/profile', {
            headers: { "Authorization": `Bearer ${token}` }
        });

        const role = profileResponse.data.user.role;
        // Redirect based on role
        if (role === 'admin') {
            navigate('/dashboard');
        } else {
            navigate('/home');
        }


    }



    return (
        <>
            <div className="login d-flex  align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="login-form  d-flex justify-content-center">
                                <form onSubmit={login} >
                                    <h2>login</h2>
                                    <label>Email: <input type="text" name='email' ref={email} className='form-control' placeholder='Enter name' /></label>
                                    <label>Password: <input type="password" name='password' ref={password} className='form-control' placeholder='Enter password' /></label>
                                    <div className="login-btn text-center">
                                        <button className='button' type='submit' >login</button>
                                        <Link to={"/register"} >register</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
