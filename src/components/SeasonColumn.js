import React from "react";
import { Link } from "react-router-dom";

function SeasonColumn({ episodes, season }) {
  return (
    <div>
      <div className="flex justify-center text-slate-50">Season {season}</div>
      <div className="p-4">
        {episodes
          .filter((elem) => elem.season === season)
          .map((elem) => {
            return (
              <div key = {elem.title} className="flex flex-col h-40 bg-white border border-gray-200 my-5 shadow-2xl rounded-lg overflow-hidden">
                <div className="flex items-center justify-center h-full">
                  <Link to = "/episode" className="truncate text-2xl" state = {{episode: elem}} >{elem.title}</Link>
                </div>
                    <div className="flex justify-center text-slate-50 bg-slate-800 text-sm text-gray-700">{elem.air_date}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SeasonColumn;
