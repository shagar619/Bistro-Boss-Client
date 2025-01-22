import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../Components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


// TODO : add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div>

            <SectionTitle
            subHeading={"----Payment System----"}
            heading={"PAYMENT"}>
            </SectionTitle>
            
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;