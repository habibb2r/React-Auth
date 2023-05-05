// import React, { useContext } from 'react';
// import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../Provider/Authprovider';
// import './Header.css';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';
// import { toast } from 'react-toastify';


// const Header = () => {
//     const {user, logOut} = useContext(AuthContext);
//     const handleLogOut = () =>{
//         logOut()
//         .then(result =>{
//             toast.success('GoodBye', {
//                 position: "top-right",
//                 autoClose: 2000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "colored",
//                 });
//         })
//         .catch(error => console.log(error));
//     }
//     return (
//         <Container>
//             <div className='my-4 mx-auto d-flex justify-content-between align-items-center'>
//                 <h1 className='text-success'>Chef <span className='text-danger'>Legends</span> </h1>
//                 <div className='fs-5'>
//                     <Link className='mx-3 text-decoration-none text-secondary' to="/">Home</Link>
//                     <Link className='mx-3 text-decoration-none text-secondary' to="/blog">Blog</Link>
//                     {/* <Link className='mx-3 text-decoration-none text-secondary' to="/signin">Sign In</Link>  */}
//                     {
//                         user? <span>
//                            <Tippy content={<span>{user.displayName}</span>}>
//                             <img className='pp' src={user.photoURL} alt={user.displayName} data-tip={user.displayName}/></Tippy><button className='btn btn-warning' onClick={handleLogOut}>Sign Out</button></span> : <Link className='mx-3 text-decoration-none text-secondary' to="/signin">Sign In</Link>  
//                     }
//                 </div>
//             </div>
//         </Container>
//     );
// };

// export default Header;

import React from 'react';

const Header = () => {
    return (
        <div>
            
        </div>
    );
};

export default Header;