import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { FaUsers } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';
import { IoWalletSharp } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const AdminHome = () => {

    const { user } = useAuth();
    const axiosSecure = useAxios();

    const {data: stats = {}} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async() => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async() => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })


        // custom shape for the bar chart
        const getPath = (x, y, width, height) => {
            return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
            ${x + width / 2}, ${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
            Z`;
        };
    
        const TriangleBar = (props) => {
            const { fill, x, y, width, height } = props;
    
            return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
        };



        // custom shape shape for the pie chart
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
);
};


    const pieChartData = chartData.map(data =>{
        return { name: data.category, value: data.revenue }
    });



    return (

        <div className="px-12 pt-12 pb-36 bg-slate-100">

            <Helmet>
                <title>BISTRO BOSS | DASHBOARD | ADMIN HOME</title>
            </Helmet>
            
            <h2 className="text-[#151515] text-4xl font-semibold mb-12">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : "Back"
                }
            </h2>

{/* stat */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-serif">

<div 
style={{ 'background': 'linear-gradient(90.00deg, rgb(187, 52, 245),rgb(252, 219, 255) 100%)'}}
className="flex items-center gap-8 py-9 px-12 text-white rounded-lg transition hover:scale-105 shadow-xl">
    <div>
        <div><IoWalletSharp className="text-6xl"></IoWalletSharp></div>
    </div>
    <div>
        <h3 className="text-[40px] font-extrabold">{stats.revenue}</h3>
        <h3 className="text-2xl font-medium">Revenue</h3>
    </div>
</div>

<div 
style={{'background': 'linear-gradient(90.00deg, rgb(211, 162, 86),rgb(253, 232, 192) 100%)'}}
className="flex items-center gap-8 py-9 px-12 text-white rounded-lg transition hover:scale-105 shadow-xl">
    <div>
        <div><FaUsers className="text-6xl"></FaUsers></div>
    </div>
    <div>
        <h3 className="text-[40px] font-extrabold">{stats.users}</h3>
        <h3 className="text-2xl font-medium">Users</h3>
    </div>
</div>

<div 
style={{'background': 'linear-gradient(90.00deg, rgb(254, 72, 128),rgb(254, 205, 233) 100%)'}}
className="flex items-center gap-8 py-9 px-12 text-white rounded-lg transition hover:scale-105 shadow-xl">
    <div>
        <div><IoMdMenu className="text-6xl"></IoMdMenu></div>
    </div>
    <div>
        <h3 className="text-[40px] font-extrabold">{stats.menuItems}</h3>
        <h3 className="text-2xl font-medium">Menu</h3>
    </div>
</div>

<div 
style={{ 'background': 'linear-gradient(90.00deg, rgb(106, 174, 255),rgb(182, 247, 255) 100%)'}}
className="flex items-center gap-8 py-9 px-12 text-white rounded-lg transition hover:scale-105 shadow-xl">
    <div>
        <div><MdMenuBook className="text-6xl"></MdMenuBook></div>
    </div>
    <div>
        <h3 className="text-[40px] font-extrabold">{stats.orders}</h3>
        <h3 className="text-2xl font-medium">Orders</h3>
    </div>
</div>

</div>



{/* Charts */}

<div className="flex flex-col md:flex-row md:justify-center md:items-center bg-white py-6 mt-8">

    {/* 1st Chart */}
    <div className="w-1/2">
    <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
        }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="category" />
    <YAxis />
    <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % 6]} />))}
    </Bar>
    </BarChart>
    </div>



    {/* 2nd chart */}
    <div className="w-1/2">
    <PieChart width={400} height={400}>
        <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value">
            {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
        </Pie>
        <Legend></Legend>
        </PieChart>
    </div>


</div>


</div>
);
};

export default AdminHome;