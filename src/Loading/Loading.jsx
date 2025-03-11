import LoadingImg from './../assets/others/cupcake-dribbble.gif';

const Loading = () => {
    return (
        <div className='w-1/2 mx-auto mt-8'>

            <div>
                <img src={LoadingImg} alt="" />
            </div>

            <h2 className='text-center text-5xl font-bold leading-[65px]'>Welcome to Bistro Boss <br /> Restaurant</h2>
            
        </div>
    );
};

export default Loading;