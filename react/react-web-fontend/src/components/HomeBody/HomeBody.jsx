import React from "react";
import "./HomeBody.css";
import RotatingContentBodyHome from "./RotatingContentBodyHome";
import MarketData from "./Thumbnail-wrapper/MarketData";
const HomeBody = () => {
  return (
    <div>
    <section class="news-section">
      <div className="u-section-excellence-wrap">
        <div class="news-header">
          <div className="left-content">
            <h2>
              Top-tier Trading Excellence <br />
              <span>Stay Updated with KCMTrade</span>
            </h2>
          </div>
          <div className="right-content">
            <p>
              Get the latest updates, market insights, and an inside look at our
              events through KCMTrade’s news and exclusive video content.
            </p>
          </div>
        </div>
        <RotatingContentBodyHome />
      </div>

      <div class="thumbnail-wrapper">
        <div class="thumbnail-list animate-slide">
          <div class="thumb">
            <img src="thumb1.jpg" />
            <div class="thumb-title">
              KCMTrade Thailand Office’s Anniversary Celebration
            </div>
          </div>
          <div class="thumb">
            <img src="thumb2.jpg" />
            <div class="thumb-title">Exclusive Drifting Experience</div>
          </div>
          <div class="thumb">
            <img src="thumb3.jpg" />
            <div class="thumb-title">Finance Magnates London</div>
          </div>
          <div class="thumb">
            <img src="thumb4.jpg" />
            <div class="thumb-title">Earth Hour 2025</div>
          </div>
          <div class="thumb">
            <img src="thumb5.jpg" />
            <div class="thumb-title">Seminar in Thailand</div>
          </div>

          <div class="thumb">
            <img src="thumb1.jpg" />
            <div class="thumb-title">
              KCMTrade Thailand Office’s Anniversary Celebration
            </div>
          </div>
          <div class="thumb">
            <img src="thumb2.jpg" />
            <div class="thumb-title">Exclusive Drifting Experience</div>
          </div>
          <div class="thumb">
            <img src="thumb3.jpg" />
            <div class="thumb-title">Finance Magnates London</div>
          </div>
          <div class="thumb">
            <img src="thumb4.jpg" />
            <div class="thumb-title">Earth Hour 2025</div>
          </div>
          <div class="thumb">
            <img src="thumb5.jpg" />
            <div class="thumb-title">Seminar in Thailand</div>
          </div>
        </div>
      </div>
    </section>
      <MarketData/>
    </div>

  );
};

export default HomeBody;
