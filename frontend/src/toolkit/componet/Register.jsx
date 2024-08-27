import axios from 'axios';
import React, { useRef } from 'react'
import { BASE_URL, USER_REGISTER } from '../constnt';

const Register = () => {

    let email = useRef();
    let password = useRef();

    let data = async (e) => {
        e.preventDefault();

        let user = {
            email: email.current.value,
            password: password.current.value,
        }

        let res = await axios.post(BASE_URL + USER_REGISTER, user, { withCredentials: true })
        console.log(res);

    }


    return (
        <div className="login d-flex  align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="login-form  d-flex justify-content-center">
                            <form onSubmit={data} >
                                <h2>login</h2>
                                <label>Email: <input type="text" name='email' ref={email} className='form-control' placeholder='Enter name' /></label>
                                <label>Password: <input type="password" name='password' ref={password} className='form-control' placeholder='Enter password' /></label>
                                <div className="login-btn text-center">
                                    <button className='button' type='submit' >login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
