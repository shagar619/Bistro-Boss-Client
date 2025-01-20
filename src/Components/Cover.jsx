import { Parallax } from 'react-parallax';


const Cover = ({ img, title, subTitle }) => {
    return (

        <Parallax
        blur={{ min: -1, max: 1 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-100}>

<div className="hero h-[700px]">
<div className="hero-overlay bg-opacity-5"></div>

    <div className="w-9/12 mx-auto text-white flex flex-col justify-center items-center bg-[#15151599] py-24 px-24">

        <h1 className="mb-5 text-7xl font-bold uppercase">{title}</h1>
        <p className="uppercase text-center text-2xl font-semibold">
            {subTitle}
        </p>

    </div>
</div>

</Parallax>

    );
};

export default Cover;