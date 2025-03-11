import { Link } from 'react-router-dom';
import ErrorImg from './../assets/shop/404.gif';
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='w-1/2 mx-auto mt-36'>
            <div>
                <img src={ErrorImg} alt="" />
            </div>
            <p className='text-center'><Link to={'/'}><button 
            style={{background: 'linear-gradient(90.00deg, rgb(131, 93, 35),rgb(181, 129, 48) 100%)'}}
            className='btn text-xl text-white'>Back To Home <FaHome></FaHome> </button></Link></p>
        </div>
    );
};

export default ErrorPage;