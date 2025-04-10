import React from "react";
import './MarketData.css'
import imgmarket from '../../../assets/images/market.webp'
const MarketData = () => {
  return (
    <section class="market-access">
          <h2>Access multiple financial markets instantly</h2>
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
            <button>Currency</button>
            <button>Metal</button>
            <button>Energy</button>
            <br />
            <button>Index</button>
            <button>Stock</button>
          </div>

          <p class="footer-note">
            <strong>KCMTrade</strong> Offer competitive prices, profit margins
            great profits and access to trading products head.
          </p>
        </div>
      </div>

      <div class="market-cards">
        <div class="card">
          <img src="google.png" alt="Google" />
          <p>Google</p>
          <div class="value">0.0</div>
          <div class="prices">
            <span>Bid: 0.0</span>
            <span>Ask Price: 0.0</span>
          </div>
        </div>

        <div class="card">
          <img src="eurusd.png" alt="EURUSD" />
          <p>EURUSD</p>
          <div class="value">0.0</div>
          <div class="prices">
            <span>Bid: 0.0</span>
            <span>Ask Price: 0.0</span>
          </div>
        </div>

        <div class="card">
          <img src="gbpusd.png" alt="GBPUSD" />
          <p>GBPUSD</p>
          <div class="value">0.0</div>
          <div class="prices">
            <span>Bid: 0.0</span>
            <span>Ask Price: 0.0</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketData;
