import Footer from "../Footer";
import Navbar from "../Navbar";
import BuyToken from "./BuyComponents/BuyTokenSection";
import HowToBuy from "./BuyComponents/HowToBuySection";
import Referral from "./BuyComponents/ReferralSection";
import "./BuyNowPage.css";

export default function BuyNowPage() {
    return (
        <>
            <div className="BuyNowPage_container">
                <Navbar />
                <div className="nth-dot"></div>
                <BuyToken />
                <HowToBuy />
                <Referral />
                <Footer />
            </div>
        </>
    )
}

