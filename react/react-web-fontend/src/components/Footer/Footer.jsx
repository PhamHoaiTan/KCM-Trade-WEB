import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-section">
            <img
              src="https://cdn.prod.website-files.com/5ff2829edadccfad347a090a/66f4487a3d84e12e530a4687_kcm%20trade%20logo.svg"
              alt="KCMTrade Logo"
              className="footer-logo"
            />
            <div className="social">
              <a href="">
                <img
                  src="https://cdn.prod.website-files.com/5ff2829edadccfad347a090a/66f429720c581a41ac544084_linkedin.svg"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="https://cdn.prod.website-files.com/5ff2829edadccfad347a090a/66f429727167ea9810a3d762_youtube.svg"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="https://cdn.prod.website-files.com/5ff2829edadccfad347a090a/66f429727cc2184267116866_facebook.svg"
                  alt=""
                  className="facebook"
                />
              </a>
              <a href="">
                <img
                  src="https://cdn.prod.website-files.com/5ff2829edadccfad347a090a/66f429722735316c695851b2_instagram.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <p>
            <strong>International Hotline:</strong> +230 5297 0961
          </p>
          <p>
            <strong>Local Hotline:</strong> +230 467 0000
          </p>
          <p>
            <strong>Customer Support:</strong> CS@kcmtrade.com
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-app-wrapper">
            <a href="">
              <img
                className="phone-img"
                src="https://cdn.prod.website-files.com/5ff2829edadccfad347a090a/67bda5036d8b4fd4e8b91bc6_Frame%20120096.png"
                alt=""
              />
            </a>
            <div className="footer-app-wrapper-right">
              <p>Scan to download KCMTrade App</p>
              <a href=""><img src="https://cdn.prod.website-files.com/5ff2829edadccfad347a090a/67bd783320224e4439dbcfd5_App%20Store.svg" alt="" /></a>
              <a href=""><img src="https://cdn.prod.website-files.com/5ff2829edadccfad347a090a/67bd78333dd87772bfb9bd37_Google%20Play.svg" alt="" /></a>
              <img  className="QR" src="https://cdn.prod.website-files.com/5ff2829edadccfad347a090a/67dd4a8ec8261853d102827f_My_App%20(5)%201.png" alt="" />
            </div>
          </div>
          <div className="footer-app-menu">
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>Regulatory Compliance</li>
                <li>About KCMTrade</li>
                <li>About KCM Group</li>
                <li>KCMTrade Drift Team</li>
                <li>Company Philosophy</li>
                <li>Company News</li>
                <li>Video Gallery</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Trading Tools</h4>
              <ul>
                <li>KCMTrade Signal Centre</li>
                <li>Economic Calendar</li>
                <li>EA Support for MT4</li>
                <li>Trading Calculator</li>
              </ul>
              <h4>Trading Products</h4>
              <ul>
                <li>Forex</li>
                <li>Precious Metals</li>
                <li>Energies</li>
                <li>Equity Indices</li>
                <li>Stock CFDs</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Partnership Program</h4>
              <ul>
                <li>Introducing Broker Program</li>
              </ul>
              <h4>Trading Platforms</h4>
              <ul>
                <li>MetaTrader 4</li>
                <li>MetaTrader 5</li>
                <li>KCMTrade WebTrader</li>
              </ul>
              <h4>Trade Analysis</h4>
              <ul>
                <li>Market Analysis Team</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Upcoming Events</h4>
              <ul>
                <li>Upcoming Seminars</li>
                <li>Trade Notices</li>
                <li>Market News</li>
              </ul>
              <h4>Help Center</h4>
              <ul>
                <li>Education Center</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Sitemap</a>
          </div>
          <p>
            The services on this website are provided by Kohle Capital Markets
            Limited...
          </p>
          <p className="risk-warning">
            High-risk investment warning: Trading Foreign Exchange (Forex) and
            Contracts for Differences (CFDs)...
          </p>
          <p className="restricted">
            Restricted regions: We do not offer our services to residents of
            certain jurisdictions...
          </p>
          <p className="copyright">© 2025 KCMTrade</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
