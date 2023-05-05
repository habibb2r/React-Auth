import React, { useState } from 'react';
import {FaHeart} from 'react-icons/fa';
import { toast } from 'react-toastify';


const Viewrecepies = (props) => {
    const [favorite, setFavorite] = useState('');
    const {name, pic, ingred, rating}= props.collection;

    const handleFav =()=>{
        setFavorite('d-none');
        toast.success('❤️ Added as Favorite', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        };
    return (
        <div className='align-items-center bg-body-tertiary d-flex flex-column flex-sm-row gap-5 justify-content-between mb-5 my-3 p-3 rounded shadow'>
            <div className='align-items-lg-start d-flex gap-4 justify-content-center'>
                <img  className='w-50 rounded-5 shadow-sm p-3 bg-body-tertiary ' src={pic} alt="" />
                <div>
                   <h4>Name : {name}</h4>
                   <p><span className='fs-5'>Ingredients :</span> <br /> {ingred}</p>
                   <p><span className='fw-semibold'>Rating :</span> {rating}</p>
                </div>
            </div>

            <button onClick={handleFav} className={`btn btn-warning ${favorite}`}><FaHeart></FaHeart></button>
        </div>
    );
};

export default Viewrecepies;