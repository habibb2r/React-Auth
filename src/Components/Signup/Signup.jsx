import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../Provider/Authprovider';
import { updateProfile } from 'firebase/auth';
import Spinner from '../Style/Spinner/Spinner';
import { toast } from 'react-toastify';

const Signup = () => {
    const [error, setError] =useState('');
    
    const {createUser, updateUser} = useContext(AuthContext);
    
const handleSignUp = event =>{
    
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const displayName = form.name.value;
    const photoURL = form.photourl.value;
    const password = form.password.value;
    console.log(email, displayName, photoURL,password);
    setError('');
    if(password.length < 6){
        setError('***Enter Minimum 6 digit Password')
        return
    }
    createUser(email, password)
    .then((result) =>{
        updateProfile(result.user, {
            displayName: displayName, photoURL: photoURL
          }).then(() => {
           
            console.log(result.user)
            form.reset();
            toast.success(`Welcome.. ${result.user.displayName}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            
        
          }).catch((error) => {
            
          });
    })
    .catch(error =>{
        console.log(error);
        setError(error.message);
    });
    
}

    return (
        <Container>
            <form onSubmit={handleSignUp} className='mx-auto w-50 p-3'>
                <p className='text-danger'>{error}</p>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email"  name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>  
                </div>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type=" text"  name='name' className="form-control" id="" aria-describedby=""/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Photo Url</label>
                    <input type=" text" name='photourl'  className="form-control" id="" aria-describedby=""/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password"  name='password' className="form-control" id="exampleInputPassword1" required/>
                </div>
                
                <button type="submit" className="btn btn-success">Sign Up</button>
            </form>
        </Container>
    );
};

export default Signup;