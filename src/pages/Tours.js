import "../pages/Tours.css";
import ToursWidget from "../components/ToursWidget";

function Tours() {
  return (
    <>
      <div className="tours">
        <h1>Tours</h1>
        <h3>Our offer includes a variety of different types of products, such as:</h3>
        <div className="widget">
        <div className="column">
        <ToursWidget/>
        </div>
        </div>
      </div>
    </>
  );
}

export default Tours;