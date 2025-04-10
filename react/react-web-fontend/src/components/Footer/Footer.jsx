import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src="/images/kcm-logo.png" alt="KCMTrade Logo" className="footer-logo" />
          <div className="app-preview">
            <img src="/images/phone1.png" alt="App preview 1" className="phone-img" />
            <img src="/images/phone2.png" alt="App preview 2" className="phone-img" />
          </div>
          <p>Scan to Download <strong>KCMTrade App</strong></p>
          <div className="app-links">
            <img src="/images/appstore.png" alt="App Store" />
            <img src="/images/googleplay.png" alt="Google Play" />
          </div>
          <img src="/images/qrcode.png" alt="QR Code" className="qr-code" />
        </div>

        <div className="footer-columns">
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

        <div className="footer-contact">
          <p><strong>International Hotline:</strong> +230 5297 0961</p>
          <p><strong>Local Hotline:</strong> +230 467 0000</p>
          <p><strong>Customer Support:</strong> CS@kcmtrade.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Sitemap</a>
        </div>
        <p>The services on this website are provided by Kohle Capital Markets Limited...</p>
        <p className="risk-warning">
          High-risk investment warning: Trading Foreign Exchange (Forex) and Contracts for Differences (CFDs)...
        </p>
        <p className="restricted">
          Restricted regions: We do not offer our services to residents of certain jurisdictions...
        </p>
        <p className="copyright">
          © 2025 KCMTrade
        </p>
      </div>
    </footer>
  )
}

export default Footer
