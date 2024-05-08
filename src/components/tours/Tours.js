import myData from "../../data/db.json";
import  Tour  from "./tour/Tour.js";
import "./Tours.css";
function Tours(props) {
  const tour = myData;
  return (
    <>
      <Tour tour={tour} />
    </>
  );
}

export default Tours;
