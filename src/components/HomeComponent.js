import React from "react";
import SeasonColumn from './SeasonColumn'

function HomeComponent({ data }) {
  const seasons = [...new Set(data.map((elem) =>  elem.season.trim()))]
  console.log(data)
  return (
      <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-10 mr-10 ml-10">
        {seasons.map((elem) => {
          return (
            <div key = {elem}>
              <SeasonColumn episodes={data} season={elem} />
            </div>
          );
        })}
      </div>
  );
}

export default HomeComponent;
