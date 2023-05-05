import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import  { FaGithub,FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Provider/Authprovider';

import { toast } from 'react-toastify';

const Signin = () => {
    const [error, setError] =useState('');

    const {signIn, signInGoogle, signInGit} = useContext(AuthContext);
    const location = useLocation();
    // const history = useHistory();
    let navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    console.log(from);
    
    const handleGoogle = () =>{
        setError('');
        signInGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user.displayName)
            toast.success(`Signed In as ${user.displayName}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            navigate(from);
        })
        .catch(error => setError(error.message));
    }
    const handleGit =() =>{
        setError('');
        signInGit()
        .then(result =>{
            const user = result.user;
            toast.success(`Signed In as ${user.displayName}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            navigate(from);
        })
        .catch(error => setError(error.message));
    }

    const handleSignIn = event =>{
        setError('');
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
            const loggedUser= result.user;
            console.log(loggedUser);
            form.reset();
            toast.success(`Signed In as ${user.displayName}`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            navigate(from);
            // navigate("/")
        })
        .catch(error =>{
           setError(error.message)
        })

    }
    return (
        <Container>
            <form onSubmit={handleSignIn} className='mx-auto w-50 p-3'>
                <p className='text-center text-danger'>{error}</p>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <p className='text-secondary-emphasis'>New in this website? <Link className='text-success text-decoration-none' to="/signup">Sign Up</Link> </p>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <div className='mt-3 '>
                    <button onClick={handleGoogle} type="button" className="btn btn-outline-secondary "><FaGoogle></FaGoogle> Signin with Google</button>
                    <button onClick={handleGit} type="button" className="btn btn-outline-secondary mx-3"><FaGithub></FaGithub> Signin with GitHub</button>
                </div>
            </form>
        </Container>
    );
};

export default Signin;