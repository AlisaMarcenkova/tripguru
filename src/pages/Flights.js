import React from "react";
import BestRoutes from "../components/BestRoutes";
import BestRoutesOne from "../components/BestRoutesOne";
import BestRoutesTwo from "../components/BestRoutesTwo";
import BestRoutesThree from "../components/BestRoutesThree";
import BestRoutesFour from "../components/BestRoutesFour";
import BestRoutesFive from "../components/BestRoutesFive";
import BestRoutesSix from "../components/BestRoutesSix";
import BestRoutesSeven from "../components/BestRoutesSeven";
import WidgetHome from "../components/WidgetHome";
import FlightsCalendarWidget from "../components/FlightsCalendarWidget";
import "./Flights.css";

function Flights() {
  
  return (
    <>
      <div className="flights">
        <h1>Flights search</h1>
        <h3>Search and book flights with no booking fees</h3>
        <div>
        <WidgetHome/>
      </div>
      </div>
      <div className="container">
      <div className="column">
      <img src={require('../images/traveler.jpg')} alt="plane" width="300px" />
      <h3 className="title">Go anywhere</h3>
        <p>It’s your world and we’ll help you discover it. Find the best prices from millions of flights, hotels and car rental options to plan your perfect trip.</p>
      </div>
      <div className="column">
      <img src={require('../images/travelersimple.jpg')} alt="plane" width="300px" />
        <h3 className="title">Keep it simple</h3>
        <p>No hidden fees to worry about. There won't be any extra charges. Funny business is strictly prohibited. With us, you always know where your money is going. We do not store your texts. Relax before your journey begins.</p>
      </div>
      <div className="column">
      <img src={require('../images/thinking.jpg')} alt="plane" width="300px" />
        <h3 className="title">Travel your way</h3>
        <p>You know where you want to travel? Here you can find the best time for your booking. Are you flexible? Find deals on everything from brief vacations to epic adventures.</p>
      </div>
      </div>
      <h1 className="best-routes">Best Routes</h1>
        <div className="widget-contain">
        <div className="row">
        <div className="column">
        <BestRoutes/>
        </div>
        <div className="column">
        <BestRoutesOne/>
        </div>
        <div className="column">
        <BestRoutesTwo/>
        </div>
        <div className="column">
        <BestRoutesThree/>
        </div>
        </div>
        <div className="row">
        <div className="column">
        <BestRoutesFour/>
        </div>
        <div className="column">
        <BestRoutesFive/>
        </div>
        <div className="column">
        <BestRoutesSix/>
        </div>
        <div className="column">
        <BestRoutesSeven/>
        </div>
        </div>
        </div>
        <div className="why-use-services">
          <h1>WHY USE OUR SERVICES?</h1>
          <div className="container">
          <div className="column">
          <p className="paragraph"><i class="fa-solid fa-share"></i> We partner with a wide range of companies so you can choose from a wide range of destinations, offers and discounts.
          </p><br></br>
          <p className="paragraph"><i class="fa-solid fa-share"></i> We put together a list of the best flight offers and you pick the one that's best for you. All you have to do is search and compare.</p><br></br>
          <p className="paragraph"><i class="fa-solid fa-share"></i> We have compiled a selection of top flight deals, allowing you to choose the one that suits you best. Simply search and compare, and you're all set!</p><br></br>
          <p className="paragraph"><i class="fa-solid fa-share"></i> We firmly believe that the world is home to an abundance of stunning and captivating cities. Utilize the search box above to discover and book budget-friendly flights to your desired destination.</p><br></br>
          </div>
          <div className="column">
          <img src={require('../images/plane1.png')} alt="plane" width="500px" />
          </div>
          </div>
          </div>
        <div className="flights-calendar">
            <h1>FLIGHTS CALENDAR</h1>
              <FlightsCalendarWidget/>
        </div>
    </>
  )
}

export default Flights;