
import './ReferralSection.css';
import referral_img from "../../../Assets/Images/BuyStep_assets/referral_mobile_coins.png";

export default function Referral(){
    return(
    <div className="referral_section_container">

        <div className="referral_info_container">
            <div className="referral_offer">Earn a 10% bonus from all referred investors!</div>
            <div className="referral_information">Share your unique link with friends, family, and your network, to automatically receive 10% of all of their investments in GRT.</div>
            <button>Refer Now</button>
        </div>
        <img src={referral_img} alt="" />

    </div>)
}