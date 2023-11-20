import "../pages/CarRentals.css";
import WidgetCarRentals from "../components/WidgetCarRentals";

function CarRentals() {
  return (
    <>
      <div className="car-rentals">
        <h1>Car rental</h1>
        <h3>The widest range of the car rental suppliers, best-price and convenient pick-up location</h3>
          <div>
          <div className="container">
            <div className="column">
              <h2 className="title">Car rental</h2><br></br>
              <p className="text">Explore a vast collection of reliable car rental providers, secure the best rates, and choose from 20,000 easily accessible pickup points.</p>
              <br></br>
              <p className="text"><i class="fa-solid fa-circle-dot fa-lg"></i> Compare various rental agencies to secure the most competitive prices.</p>
              <p className="text"><i class="fa-solid fa-circle-dot fa-lg"></i> Cancellation is complimentary until 48 hours before the scheduled pickup time.</p>
              <p className="text"><i class="fa-solid fa-circle-dot fa-lg"></i> Lowest Price Assurance</p>
              <p className="text"><i class="fa-solid fa-circle-dot fa-lg"></i> Round-the-Clock Support from Start to Finish</p>
            </div>
            <div className="column">
            <WidgetCarRentals/>
            </div>
            </div>
          </div>      
      </div>
    </>
  );
}

export default CarRentals;