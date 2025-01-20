import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
<div>
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="col-span-1 py-24 space-y-6 flex flex-col justify-center items-center bg-[#1F2937] text-white">
    <h2 className="text-3xl font-medium">Contact Us</h2>
    <p className="text-xl font-medium leading-9">123 ABS Street, Uni 21, Bangladesh <br />
        +88 123456789 <br />
        Mon - Fri: 08:00 - 22:00 <br />
        Sat - Sun: 10:00 - 23:00
    </p>
</div>

<div className="col-span-1 py-24 space-y-6 flex flex-col justify-center items-center bg-[#111827] text-white">
    <h2 className="text-3xl font-medium">Follow Us</h2>
    <p className="text-xl font-medium">Join us on social media</p>
    <div className='flex items-center gap-4'>
            <Link><FaFacebook className='h-8 w-8 bg-[#111827] text-white'></FaFacebook></Link>
            <Link><FaTwitter className='h-8 w-8 bg-[#111827] text-white'></FaTwitter></Link>
            <Link><FaInstagram className='h-8 w-8 bg-[#111827] text-white'></FaInstagram></Link>
    </div>
</div>
</div>

<div className="bg-[#151515] text-white py-5">
    <h3 className="text-center text-xl font-medium">
    Copyright © Bistro Boss. All rights reserved.
    </h3>
</div>

</div>
    );
};

export default Footer;