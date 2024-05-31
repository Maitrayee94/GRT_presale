import "./HowToBuySection.css";

import wallet_icon from "../../../Assets/Images/BuyStep_assets/wallet.png";
import step1_wallet_1 from "../../../Assets/Images/BuyStep_assets/MetaMask 2.png";
import step1_wallet_2 from "../../../Assets/Images/BuyStep_assets/Trust.png";
import step1_wallet_3 from "../../../Assets/Images/BuyStep_assets/coinbase.png";
import step1_wallet_4 from "../../../Assets/Images/BuyStep_assets/walletConnect.png";

import step2_usdt from "../../../Assets/Images/BuyStep_assets/token-branded.png";
import buycart_icon from "../../../Assets/Images/BuyStep_assets/buycart.png";
import step2_coin from "../../../Assets/Images/BuyStep_assets/coin_chain_2.png";

import step3_icon from "../../../Assets/Images/BuyStep_assets/dellevericon.png";
import dron_icon from "../../../Assets/Images/BuyStep_assets/drone_icon_2.png";

export default function HowToBuy(){
    
    return(
    <div className="HowToBuySection_container">
        <h1 className="main_heading text-center text-5xl">How to Buy GRT Coins</h1>

        <div className="BuyStep_container">

            {/* step 1 */}

            <div className="step1_container">
                <div className="step1_info_container flex flex-col gap-3">
                    <div className="step1_info">
                    <div className="step1_heading ">Step 1 <img src={ wallet_icon} alt="step1logo" /></div>
                        <p>To begin, make sure you have a MetaMask wallet installed on your browser, or use one of the wallets supported by Wallet Connect (we recommend Trust Wallet or Plus Wallet).</p>
                        <p>Purchasing on a desktop browser will give you a smoother purchasing experience. For this we recommend Metamask.x</p>
                        <p>If you are purchasing on mobile, we recommend using Trust Wallet or Plus Wallet and connecting through built in Wallet Connect.</p>
                    </div>
                </div>

                <div className="step1_other_container">
                    <div>
                        <img src={step1_wallet_1} alt="" />
                        <img src={step1_wallet_2} alt="" />
                    </div>

                    <div>
                        <img src={step1_wallet_3} alt="" />
                        <img src={step1_wallet_4} alt="" />
                    </div>
                    
                </div>
            </div>


            {/* step 2  */}

            <div className="step2_container">

                <div className="step2_usdt_container">
                    <img src={step2_usdt} alt="" />
                    <div>Buy GRT with USDT</div>
                    <p>Please ensure you have at least $20 of USDT in your wallet before commencing the transaction. Type in the amount of BlockDAG Network you wish to purchase ($15 minimum). Click “Convert USDT”. You will then be asked to approve the purchase TWICE. The first approval is for the USDT contract and the second is for the transaction amount. Please ensure you go through both approval steps in order to complete the transaction.</p>
                </div>


                <div className="step2_info_contaner">
                    <div className="step2_heading">Step 2 <img src={buycart_icon} alt="step2logo" /></div>
                    <div>Buy GRT with USDT</div>
                    <div>Once you have your preferred wallet provider ready, click “Connect Wallet” and select the appropriate option.</div>
                    <div>For mobile wallet apps you will need to select “Wallet Connect”</div>
                    <img src={step2_coin} alt="" />
                </div>
            </div>

            {/* step 3 */}

            <div className="step3_container">

                <div className="step3_info_contaner">
                    <div className="step3_heading">Step 3 <img src={step3_icon} alt="step2logo" /></div>
                    <div>Once the presale has concluded, you will be airdropped your GRT coins. The exact date and time of the airdrop will be revealed closer to the time of the BDAG launch.</div>
                </div>
    
                <div className="step3_dron_img">
                    <img src={dron_icon} alt="" />
                </div>
            </div>

        </div>
    </div>)
}