import { useEffect } from "react";
import "./cd_comps.css";
import CD_CompsTracks from "./CD_CompsTracks";
import CD_CompsData from "../../data/CD_CompsJSON.json";

const CD_Comps = (props) => {
  const { setTotalPages, setCurrPage, paginate } = props;
  const offset = 75;
  console.log(CD_CompsData[74]);
  useEffect(() => {
    setTotalPages(1);
    setCurrPage(1);
    setTotalPages(Math.ceil(CD_CompsData.length / offset));
  }, []);

  return paginate(
    CD_CompsData.map((comp) => {
      return (
        <div
          className='cdCompsCardWrapper'
          key={comp["Title ID"]}
        >
          <fieldset className='compsCompWrapper'>
            <legend title={comp.Title}>
              {comp.Title.length > 25
                ? comp.Title.slice(0, 26) + "..."
                : comp.Title}
            </legend>
            <div className='fieldsetSubHead'>
              <p>{comp["Box ID"]}</p>
              <p>{comp.Year}</p>
            </div>
            <div className='compTracksWrapper'>
              <CD_CompsTracks titleID={comp["Title ID"]} />
            </div>
          </fieldset>
        </div>
      );
    }),
    offset,
  );
};

export default CD_Comps;
