import "./cd_Singles.css";
import cd_Singles from "../../data/CD_SinglesJSON.json";
import CD_SinglesTracks from "./CD_SinglesTracks";

const CD_Singles = (props) => {
  const { paginate } = props;
  const offset = 75;

  return paginate(
    cd_Singles.map((single) => {
      return (
        <div
          key={single.ID}
          className='cdSinglesCardWrapper'
        >
          <fieldset className='singlesItemWrapper'>
            <legend title={single.Artist + " - " + single.Title}>
              {single.Artist} -{" "}
              {single.Title.length > 25
                ? single.Title.slice(0, 26) + "..."
                : single.Title}
            </legend>
            <div className='fieldsetSubHead'>
              <p>{single["Case Type"]}</p>
              <p>{single.Year}</p>
            </div>
            <CD_SinglesTracks ID={single.ID} />
          </fieldset>
        </div>
      );
    }),
    offset,
  );
};

export default CD_Singles;
