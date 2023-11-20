import "../pages/Hotels.css";
import WidgetHotels from "../components/WidgetHotels";
import TopHotelDealsWidget from "../components/TopHotelDealsWidget";
import TrendingHotelsWidget from "../components/TrendingHotelsWidget";
import TrendHotelDealsWidget from "../components/TrendHotelDealsWidget";
import PopularHotelsWidget from "../components/PopularHotelsWidget";
import CheapHotelOneWidget from "../components/CheapHotelOneWidget";
import CheapHotelTwoWidget from "../components/CheapHotelTwoWidget";
import CheapHotelThreeWidget from "../components/CheapHotelThreeWidget";
import CheapHotelFourWidget from "../components/CheapHotelFourWidget";
import CheapHotelFiveWidget from "../components/CheapHotelFiveWidget";
import CheapHotelSixWidget from "../components/CheapHotelSixWidget";

function Hotels() {
  return (
    <>
      <div className="hotels">
        <h1>Hotel search</h1>
        <h3>Search and book hotels with no booking fees</h3>
        <div>
          <WidgetHotels />
        </div>
      </div>
      <div className="container">
        <div className="column">
        <img src={require('../images/el-morro.png')} alt="plane" width="300px" />
        <h3 className="title">See it all</h3>
        <p className="paragraph">Explore countless accommodations worldwide, ranging from local inns to renowned global establishments.</p>
        </div>
        <div className="column">
        <img src={require('../images/compare.jpg')} alt="plane" width="300px" />
        <h3 className="title">Compare right here</h3>
        <p className="paragraph">You don't have to look elsewhere. The most prominent travel companies are available here.</p>
        </div>
        <div className="column">
        <img src={require('../images/rates.png')} alt="plane" width="300px" />
        <h3 className="title">Get exclusive rates</h3>
        <p className="paragraph">We have exclusive agreements with the world's premier hotels, and we pass on these discounts to you.</p>
        </div>
      </div>
      <div className="container">
        <div className="column">
          <h1 className="clmn-title">TOP HOTEL DEALS</h1>
          <TopHotelDealsWidget/>
        </div>
        <div className="column">
          <h1 className="clmn-title">TRENDING HOTELS</h1>
          <TrendingHotelsWidget/>
          <TrendHotelDealsWidget />
        </div>
      </div>
      <div className="why-services">
        <h1>WHY USE OUR SERVICES?</h1>
        <div className="container">
        <div className="column">
        <p className="paragraph-second"><i class="fa-solid fa-share fa-xl"></i> We collaborate with more than a hundred travel websites to locate the most budget-friendly options for hotels, flights, car rentals, and airport transfer taxi services.</p><br></br>
        <p className="paragraph-second"><i class="fa-solid fa-share fa-xl"></i> Our comprehensive search options and customizable filters ensure you discover precisely what you're looking for.</p><br></br>
        <p className="paragraph-second"><i class="fa-solid fa-share fa-xl"></i> The price you see in the search results is the final amount you'll pay.</p><br></br>
        <p className="paragraph-second"><i class="fa-solid fa-share fa-xl"></i> Easily compare all the leading travel websites with a single search, finding precisely what you're looking for effortlessly.</p><br></br>
        <p className="paragraph-second"><i class="fa-solid fa-share fa-xl"></i> You can easily make affordable travel bookings with ease in just a matter of minutes.</p><br></br>
      </div>
      <div className="column">
      <img src={require('../images/travel.jpg')} alt="plane" width="400px" />
      </div>
      </div>
      </div>
      <div className="popular-hotels">
        <h1>POPULAR HOTELS</h1>
        <PopularHotelsWidget/>
      </div>
      <div className="best-cheap-hotels">
      <h1>BEST CHEAP HOTELS</h1>
      </div>
        <div className="container">
            <div className="column">
              <CheapHotelOneWidget/>
            </div>
            <div className="column">
              <CheapHotelTwoWidget/>
            </div>
          </div>
          <div className="container">
            <div className="column">
              <CheapHotelThreeWidget/>
            </div>
            <div className="column">
              <CheapHotelFourWidget/>
            </div>
          </div>
          <div className="container">
            <div className="column">
              <CheapHotelFiveWidget/>
            </div>
            <div className="column">
              <CheapHotelSixWidget/>
            </div>
          </div>
    </>
  );
}

export default Hotels;