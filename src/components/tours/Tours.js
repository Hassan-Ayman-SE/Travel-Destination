import myData from "../../data/db.json";

function Tours(props) {
  return (
    <>
      {myData.map((data) => {
        return (
          <div>
            <img src={data.image} alt="img not found" />
            <p>{data.name}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default Tours;
