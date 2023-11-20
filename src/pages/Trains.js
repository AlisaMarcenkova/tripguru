import TrainWidget from "../components/TrainWidget";
import "../pages/Trains.css";

function Trains() {
  return (
    <>
      <div className="trains">
        <h1>Train Search</h1>
        <h3>Search And Book Trains With No Booking Fees</h3>
        <TrainWidget/>
      </div>
    </>
  );
}

export default Trains;