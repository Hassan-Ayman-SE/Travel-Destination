import { Link } from "react-router-dom";
function Tour(props) {
  return (
    <div className="div">
      {props.tour.map((data) => {
        return (
          <div className="card" key={data.id}>
            <img src={data.image} alt="img not found" />
            <p>{data.name}</p>
            <Link className="see-more" to={`/city/${data.id}`}>
              See more
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Tour;
