import { useState } from "react";
import { useParams } from "react-router-dom";
import myData from "../../data/db.json";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./TourDetails.css";

function TourDetails() {
  const { id } = useParams();
  const [isSeeMore, setIsSeeMore] = useState(true);

  const switchStatus = () => {
    setIsSeeMore(!isSeeMore);
  };

  const cityID = myData.find((city) => city.id === id);

  return (
    <>
      <Header />
      <div className="outer-div">
        <img src={cityID.image} alt="img not found" />
        <div className="inner-div" key={cityID.id}>
          <article>
            {isSeeMore ? cityID.info.slice(0, 150) : cityID.info}
            <span className="see" onClick={switchStatus}>
              {isSeeMore ? " ...see more" : " see less"}
            </span>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TourDetails;
