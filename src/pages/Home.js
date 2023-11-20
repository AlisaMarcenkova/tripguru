import WidgetHome from "../components/WidgetHome";
import TopDestinationsWidget from "../components/TopDestinationsWidget";
import "./HomeStyles.css";
import React from "react";
import TravelVideoPage from "./TravelVideoPage";

function Home() {

  return (
    <>
      <div className="hero">
        <h1>Great deal with us</h1>
        <h3>Chance to save up to 80% on hotels and flights worldwide</h3>
        <div>
        <div class="eael-tabs-nav">
                <ul class="eael-tab-inline-icon">
                                            <li id="hotels" class=" eael-tab-item-trigger" aria-selected="true" data-tab="1" role="tab" tabindex="0" aria-controls="hotels-tab" aria-expanded="false">
                            
                                                                <i class="fas fa-hotel"></i>                                                            
                                                            <span class="eael-tab-title title-after-icon">Hotels</span>
                            
                                                    </li>
                                            <li id="flights" class="active-default eael-tab-item-trigger" aria-selected="true" data-tab="2" role="tab" tabindex="-1" aria-controls="flights-tab" aria-expanded="false">
                            
                                                                <i class="fas fa-plane"></i>                                                            
                                                            <span class="eael-tab-title title-after-icon">Flights</span>
                            
                                                    </li>
                                            <li id="tours" class="inactive eael-tab-item-trigger" aria-selected="true" data-tab="3" role="tab" tabindex="-1" aria-controls="tours-tab" aria-expanded="false">
                            
                                                                <i class="fas fa-globe-americas"></i>                                                            
                                                            <span class="eael-tab-title title-after-icon">Tours</span>
                            
                                                    </li>
                                            <li id="car-rentals" class="inactive eael-tab-item-trigger" aria-selected="true" data-tab="4" role="tab" tabindex="-1" aria-controls="car-rentals-tab" aria-expanded="false">
                            
                                                                <i class="fas fa-car-side"></i>                                                            
                                                            <span class="eael-tab-title title-after-icon">Car Rentals</span>
                            
                                                    </li>
                                    </ul>
            </div>
        <WidgetHome/>
      </div>
      </div>
      <div className="top-destinations">
      <h1>Top Destinations</h1>
      <h3>Need travel inspiration? Check out most popular destinations.</h3>
      <div className="widget-page">
      <TopDestinationsWidget/>
      </div>
      </div>
      <div className="travel-tips">
        <h1>Travel Tips</h1>
        <h3>Northern Ireland’s is now contingent. Britain is getting a divorce Northern Ireland is being offered a trial separation for Britain there is a one</h3>
        <button>Get inspired</button>
      </div>
      <div className="why-chose">
        <h1>Why chose us</h1>
        <div className="container">
          <div className="column">
          <img src={require('../images/money.png')} alt="plane" width="100px" />
            <h3>Competitive Pricing</h3>
            <p className="paragraph">
            Benefit from our network of over 500 suppliers and the collective purchasing strength of 300 million members, ensuring that our platform helps you save more!
            </p>
          </div>
          <div className="column">
          <img src={require('../images/awards.png')} alt="plane" width="100px" />
            <h3>Award-Winning Service</h3>
            <p className="paragraph">
            Rest assured during your travels, as we are available 24/7 to assist you whenever you need us!
            </p>
          </div>
          <div className="column">
          <img src={require('../images/world.jpg')} alt="plane" width="100px" />
            <h3>Worldwide Coverage</h3>
            <p className="paragraph">
            Discover a vast selection of accommodation with over 1,200,000 hotels across 200 countries and regions, alongside flight options spanning over 5,000 cities.
            </p>
          </div>
        </div>
      </div>
      <div className="todays-top-places">
        <h1>Today's top places</h1>
        </div>
        <TravelVideoPage/>
      <div className="reasons-to-book">
        <h1>Reasons to book with us</h1>
        <div className="container">
          <div className="column">
            <p className="paragraph-text-color"><i class="fa-solid fa-square-check fa-2xl"></i> Easily compare the leading travel websites with a single search, finding precisely what you're looking for effortlessly. </p>
            <p className="paragraph-text-color"><i class="fa-solid fa-square-check fa-2xl"></i> We assure you of our commitment: no booking fees, no added mark-ups.</p>
            <p className="paragraph-text-color"><i class="fa-solid fa-square-check fa-2xl"></i> We exclusively feature reliable and verified travel providers in our search engine.</p>
          </div>
          <div className="column">
            <p className="paragraph-text-color"><i class="fa-solid fa-square-check fa-2xl"></i> Last year, thousands of travelers relied on us to discover the finest hotel deals.</p>
            <p className="paragraph-text-color"><i class="fa-solid fa-square-check fa-2xl"></i> Rest assured, there are no additional charges or concealed fees. The price you see is precisely what you'll pay.</p>
            <p className="paragraph-text-color"><i class="fa-solid fa-square-check fa-2xl"></i> By searching through major booking platforms as well as smaller local systems, we guarantee that you'll discover the most competitive prices available.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
