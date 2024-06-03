import "./BuyTokenSection.css";
import progress_dot from "../../../Assets/Icons/progres_dot.png";
import USDT_logo from "../../../Assets/Icons/USDT_logo.png";
import GRT_logo_black from "../../../Assets/Icons/GRT_LOGO_black.png";

import buyOption1 from "../../../Assets/Icons/payment-1.svg";
import buyOption2 from "../../../Assets/Icons/payment-2.svg";
import buyOption3 from "../../../Assets/Icons/payment-3.svg";
import buyOption4 from "../../../Assets/Icons/payment-4.svg";
import buyOption5 from "../../../Assets/Icons/payment-5.svg";
import buyOption6 from "../../../Assets/Icons/payment-6.svg";
import buyOption7 from "../../../Assets/Icons/payment-7.svg";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { PRESALE_CONTRACT_ADDRESS, PRESALE_CONTRACT_ABI, GRT_TOKEN_CONTRACT_ADDRESS, GRT_TOKEN_CONTRACT_ABI } from "../../../constant/index.js";

export default function BuyToken() {
  const [IsKeyPresent, setIsKeyPresent] = useState(false);
  const [usdtAmount, setUsdtAmount] = useState('');
  const [grtAmount, setGrtAmount] = useState('');
  const [ToggleBTN, setToggleBTN] = useState(false);
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState("");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(PRESALE_CONTRACT_ADDRESS, PRESALE_CONTRACT_ABI, signer);
  const tokenContract = new ethers.Contract(GRT_TOKEN_CONTRACT_ADDRESS, GRT_TOKEN_CONTRACT_ABI, signer);

  const [balance, setBalance] = useState(0);
  const [remainingToken, setRemainingToken] = useState(0);
  const [toknsold, setTokenSold] = useState(0);

  useEffect(() => {
    const getData = async () => {
      
      try {
        const usdbalance = await provider.getBalance(PRESALE_CONTRACT_ADDRESS);
        console.log("inside try block");
        setBalance(ethers.utils.formatEther(usdbalance));
        console.log("USD Balance:", ethers.utils.formatEther(usdbalance));
        
        const remainingtoken = await contract.remainingTokens();
        const rt = 2_000_000_000 - ethers.utils.formatUnits(remainingtoken, 18);
        setRemainingToken(ethers.utils.formatUnits(remainingtoken, 18));
        console.log(ethers.utils.formatUnits(remainingtoken, 18));
        setTokenSold(rt);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    getData();
  }, [contract]);

  useEffect(() => {
    const handleApprovalAndStaking = async () => {
      if (!account || !usdtAmount) return;

      setLoading(true);
      console.log(account);
      try {
        const rate = await contract.rate();
        const grtTokens = usdtAmount * rate;
        setGrtAmount(grtTokens);

        const approve = await tokenContract.approve(
          PRESALE_CONTRACT_ADDRESS,
          ethers.utils.parseUnits(usdtAmount.toString(), 18)
        );
        await approve.wait();
        console.log(approve);

        const tx = await contract.buyTokens({ value: ethers.utils.parseEther(usdtAmount)});
        await tx.wait();
      } catch (error) {
        console.error("Error in buying GRT: ", error);
      } finally {
        setLoading(false);
      }
    };

    handleApprovalAndStaking();
  }, [account, usdtAmount]);

  const connectWallet = async (event) => {
    event.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        console.error(error);
        return;
      }
    } else {
      console.error("Ethereum object not found");
    }
  };

  const handleUsdtChange = (e) => {
    const value = e.target.value;
    setUsdtAmount(value);
    setGrtAmount(value ? value * 100 : '');
  };

  const handleGrtChange = (e) => {
    const value = e.target.value;
    setGrtAmount(value);
    setUsdtAmount(value ? value / 100 : '');
  };

  function keyPresentHandle() {
    setIsKeyPresent(!IsKeyPresent);
  }

  return (
    <div className="BuyCoin_Section_Container flex min-h-[90vh] py-10 lg:py-5 justify-evenly items-center gap-8 w-full">
      <div className="Buycoin_info_container flex flex-col gap-4 justify-center items-start w-2/5">
        <h1 className="text-start text-5xl">
          Get Your GRT Tokens Today : Revolutionize Gaming Rewards.
        </h1>
        <p className="text-start w-fit">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          facere cupiditate ex eius voluptates tempore, hic delectus fuga ut sit
          quae omnis quidem corrupti reiciendis eveniet consequatur nulla non
          velit!
        </p>
        <div className="buttons flex gap-9">
          <button>How to Buy</button>
          <button>Refer & Earn</button>
        </div>
      </div>

      <div className="payment_main_container flex flex-col justify-start items-center gap-9 pb-5 w-2/5 bg-neutral-950 rounded-2xl overflow-hidden border border-solid border-green-900">
        <div className="bg-neutral-800 p-1 pl-5 w-full">
          <p className="text-start font-bold text-base text-slate-400">
            Current Batch <span className="font-bold text-white">BATCH1</span>
          </p>
        </div>

        <div className="buy_coin_main_container flex flex-col items-center bg-neutral-800 w-11/12 pt-4 pb-4 rounded-xl">
          <div className="coin_Seles_graph flex flex-col items-center gap-3 p-4 w-full">
            <div className="flex w-full">
              <section className="w-2/4 text-center">
                <span className="text-slate-400">Total Coin Sales USD</span>{" "}
                <br /> {balance}
              </section>
              <section className="w-2/4 text-center border-l border-slate-600">
                <span className="text-slate-400">Total Coin Sold</span> <br />{" "}
                {toknsold}
              </section>
            </div>

            <div className="w-11/12 bg-black rounded-full h-9 p-0.5 border border-slate-500">
              <div
                className="w-3/4 h-full p-1 pl-4 top-0 left-0 rounded-full relative"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(0, 152, 15) 21.9%, rgb(36, 255, 0) 100%)",
                }}
              >
                <div className="absolute top-0 left-0 h-full w-fit pl-2 text-xs flex items-center">
                  Remaining {remainingToken}
                </div>
                <img
                  src={progress_dot}
                  alt="progres circle"
                  className="absolute top-0 right-0 w-8 h-auto"
                />
              </div>
            </div>
          </div>

          <div className="buy_coin_container flex flex-col items-center gap-3 p-4 w-full">
            <div className="flex w-full">
              <section className="w-2/4 text-center">
                1 USDT = 1 GRT
              </section>
              <section className="w-2/4 text-center">
                Next Batch: 0.005
              </section>
            </div>

            <div className="relative mb-2 w-[90%] h-fit">
              <div className="absolute inset-y-0 start-0 mx-3 flex items-center pointer-events-none">
                <img
                  loading="lazy"
                  src={USDT_logo}
                  className="h-[30px] w-[30px]"
                  alt=""
                />
              </div>
              <input
                type="number"
                id="input-group-1"
                className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg block w-full px-14 py-3"
                placeholder="USDT Amount"
                value={usdtAmount}
                onChange={handleUsdtChange}
              />
            </div>

            <div className="relative mb-2 w-[90%]">
              <div className="absolute inset-y-0 start-0 mx-3 flex items-center pointer-events-none">
                <img
                  loading="lazy"
                  src={GRT_logo_black}
                  className="h-[30px] w-[30px]"
                  alt=""
                />
              </div>
              <input
                type="number"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full px-14 py-3"
                placeholder="GRT Amount"
                value={grtAmount}
                onChange={handleGrtChange}
              />
            </div>

            <button onClick={connectWallet} className="px-3 py-2 rounded-lg text-sm flex items-center bg-gray-500 hover:bg-gray-700" type="button">
              {ToggleBTN ? "Buy Now" : "Approve"}
            </button>
          </div>
        </div>

        <div className="Buy_options_container flex flex-col items-center gap-4 w-full">
          <div className="buy_option_imges flex flex-wrap gap-5 w-full justify-center">
            <img src={buyOption1} alt="" className="w-8" />
            <img src={buyOption2} alt="" className="w-8" />
            <img src={buyOption3} alt="" className="w-8" />
            <img src={buyOption4} alt="" className="w-8" />
            <img src={buyOption5} alt="" className="w-8" />
            <img src={buyOption6} alt="" className="w-8" />
            <img src={buyOption7} alt="" className="w-8" />
          </div>

          <div className="special_key_container flex flex-col items-center w-full gap-4">
            <p className="w-full text-sm text-center">
              Do you have Special Referral code?
              <span onClick={keyPresentHandle} className="text-blue-600 font-bold cursor-pointer">
                {IsKeyPresent ? "No" : "Yes"}
              </span>
            </p>

            <form action="submit">
              <div className={`${IsKeyPresent ? "flex" : "hidden"} flex-col md:flex-row items-center`}>
                <input
                  type="text"
                  placeholder="Enter key"
                  className="w-full md:w-auto flex-grow p-2 mb-2 md:mb-0 md:mr-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                />
                <button className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
