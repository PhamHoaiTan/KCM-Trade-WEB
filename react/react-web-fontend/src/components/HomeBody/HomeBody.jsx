import React from "react";
import "./HomeBody.css";
import RotatingContentBodyHome from "./RotatingContentBodyHome";
import MarketData from "./Thumbnail-wrapper/MarketData";
const items = [{
  img:"",
  text: 'KCMTrade Thailand Office’s Anniversary Celebration'
},
{
  img:"",
  text: 'Exclusive Drifting Experience'
},
{
  img:"",
  text: 'Earth Hour 2025'
},
{
  img:"",
  text: 'Seminar in Thailand'
},
{
  img:"",
  text: 'KCMTrade Thailand Office’s Anniversary Celebration'
},
{
  img:"",
  text: 'Exclusive Drifting Experience'
},
{
  img:"",
  text: 'Finance Magnates London'
},
];
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
                Get the latest updates, market insights, and an inside look at
                our events through KCMTrade’s news and exclusive video content.
              </p>
            </div>
          </div>
          <RotatingContentBodyHome />
        </div>

        <div class="thumbnail-wrapper">
          <div class="thumbnail-list">
            {[...items,...items].map((item, index)=> (
              <div class="thumb" key={index}>
              <img src={item.index} alt="" className="thumb-img"/>
              <div class="thumb-title">{item.text}</div>
            </div>
          ))}
          </div>
        </div>
      </section>
      <MarketData />
    </div>
  );
};

export default HomeBody;
