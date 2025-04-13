import React from "react";
import "./MarketData.css";
import imgmarket from "../../../assets/images/market.webp";

const items = [
  {
    img: "https://cdn.prod.website-files.com/5ff2829edadccf204e7a094f/67cea9f07c439376415b287f_USDCHF-2.svg",
    name: "Google",
    bid: 0.0,
    ask: 0.0,
  },
  {
    img: "https://cdn.prod.website-files.com/5ff2829edadccf204e7a094f/67cea99cf47c8a1eeef99dfa_uk100-2.svg",
    name: "UK100",
    bid: 0.0,
    ask: 0.0,
  },
  {
    img: "https://cdn.prod.website-files.com/5ff2829edadccf204e7a094f/67c6bfdb812074fdee65e322_NVDA.svg",
    name: "Nvidia",
    bid: 0.0,
    ask: 0.0,
  },
  {
    img: "https://cdn.prod.website-files.com/5ff2829edadccf204e7a094f/67c6bfc67d735eebd3aad56e_JPYX.svg",
    name: "JP255",
    bid: 0.0,
    ask: 0.0,
  },
  {
    img: "https://cdn.prod.website-files.com/5ff2829edadccf204e7a094f/67c6bf4d4e2a18952097ff48_coin.svg",
    name: "Coin",
    bid: 0.0,
    ask: 0.0,
  },
  {
    img: "https://cdn.prod.website-files.com/5ff2829edadccf204e7a094f/67ceab143bfb70da888e7177_USOUSD-2.webp",
    name: "WTI oil",
    bid: 0.0,
    ask: 0.0,
  },
  {
    img: "https://cdn.prod.website-files.com/5ff2829edadccf204e7a094f/67ceaa98a2b0d5605858791e_NZDUSD-2.svg",
    name: "NZDUSD",
    bid: 0.0,
    ask: 0.0,
  },
  {
    img: "https://cdn.prod.website-files.com/5ff2829edadccf204e7a094f/67cea9899c209b32320977a5_XAGUSD-2.svg",
    name: "XAGUSD",
    bid: 0.0,
    ask: 0.0,
  },
  {
    img: "https://cdn.prod.website-files.com/5ff2829edadccf204e7a094f/67c6bf7e09bc47efde027c28_AMZN.svg",
    name: "AMAZON",
    bid: 0.0,
    ask: 0.0,
  },
  {
    img: "https://cdn.prod.website-files.com/5ff2829edadccf204e7a094f/67c6bffc3537ff4e34a64f8d_TSLA.svg",
    name: "TSLA",
    bid: 0.0,
    ask: 0.0,
  },
];
const MarketData = () => {
  return (
    <section class="market-access">
      <h2>Access Multiple Financial Markets Instantly</h2>
      <div class="content-container">
        <div class="left-graphic">
          <img src={imgmarket} alt="Markets" />
        </div>
        <div class="right-content">
          <h3 class="sub-title">
            200+ Tradable instruments at your fingertips
          </h3>
          <p class="description">
            Trade anytime, anywhere, with a global reach
          </p>
          <div class="market-tags">
            <button className="btn btnCurrencies">
              <img
                className="market-tags-icon"
                src="https://cdn.prod.website-files.com/5ff2829edadccf204e7a094f/67caabf647a3925ed057c323_67aeffa0143040879d7320a7_currencies-icon.svg"
                alt=""
              />{" "}
              Currency
            </button>
            <button className="btn btnMetal">
              <img
                className="market-tags-icon"
                src="https://cdn.prod.website-files.com/5ff2829edadccf204e7a094f/67caac0513c6a284a448a3cd_67aeffa813d2bbb5312c6f0a_metals-icon.svg"
                alt=""
              />{" "}
              Metal
            </button>
            <button className="btn btnEnergy">
              <img
                className="market-tags-icon"
                src="https://cdn.prod.website-files.com/5ff2829edadccf204e7a094f/67caac12c8431fbb9f99f14e_67aeffa00a412a46bef613f7_energies-icon.svg"
                alt=""
              />{" "}
              Energy
            </button>
            <button className="btn btnIndices">
              <img
                className="market-tags-icon"
                src="https://cdn.prod.website-files.com/5ff2829edadccf204e7a094f/67caac1e663829d0036190b4_67aeffa5a7d55c66ea589429_indices-icon.svg"
                alt=""
              />{" "}
              Indices
            </button>
            <button className="btn btnStock">
              <img
                className="market-tags-icon"
                src="https://cdn.prod.website-files.com/5ff2829edadccf204e7a094f/67caac2d0a41149a18a29e77_67aeffaa2df3e411a0dbc124_stocks-icon.svg"
                alt=""
              />{" "}
              Stock
            </button>
          </div>

          <p class="footer-note">
            <strong>KCMTrade</strong> Offer competitive prices, profit margins
            great profits and access to trading products head.
          </p>
        </div>
      </div>

      <div className="ticker-wrapper">
        <div className="ticker-content">
          {[...items, ...items].map((item, index) => (
            <div className="ticker-item" key={index}>
              <div className="card">
                <div className="tiker-item-top">
                  <div className="tiker-item-top-left">
                    <img src={item.img} alt="" className="img-icon" />
                    <h4>{item.name}</h4>
                  </div>
                  <p style={{ color: "green" }}>0.0</p>
                </div>
                <div className="tinker-item-bot">
                  <div className="tinker-item-bot-price">
                    <div className="text"><p>BID PRICE</p></div>
                    <div className="price">{item.bid}.0</div>
                  </div>
                  <div className="tinker-item-bot-price">
                    <div className="text"><p>ASK PRICE</p></div>
                    <div className="price">{item.ask}.0</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketData;
