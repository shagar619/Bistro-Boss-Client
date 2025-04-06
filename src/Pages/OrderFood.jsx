

import { Helmet } from 'react-helmet-async';
import orderCoverImg from './../assets/shop/banner2.jpg'
import Cover from '../Components/Cover';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../hooks/useMenu';
import OrderTabpanel from '../Components/OrderTabpanel';
import { useParams } from 'react-router-dom';

const OrderFood = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];

    const { category } = useParams();

    const initialIndex = categories.indexOf(category);


    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu();

    const deserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>

        <Helmet>
            <title>BISTRO BOSS | ORDER FOOD</title>
        </Helmet>

            <Cover
            img={orderCoverImg}
            title={"Order Food"}
            subTitle={"Would you like to try a dish?"}>
            </Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={"text-3xl font-semibold border rounded flex justify-center gap-16 mt-16 mb-116"}>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
            <TabPanel>
                <OrderTabpanel
                items={salad}>
                </OrderTabpanel>
            </TabPanel>

            <TabPanel>
                <OrderTabpanel
                items={pizza}>
                </OrderTabpanel>
            </TabPanel>

            <TabPanel>
                <OrderTabpanel
                items={soup}>
                </OrderTabpanel>
            </TabPanel>

            <TabPanel>
                <OrderTabpanel
                items={deserts}>
                </OrderTabpanel>
            </TabPanel>

            <TabPanel>
                <OrderTabpanel
                items={drinks}>
                </OrderTabpanel>
            </TabPanel>

            </Tabs>


        </div>
    );
};

export default OrderFood;