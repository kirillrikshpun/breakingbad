import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function EpisodeComponent() {
  const location = useLocation();
  
  return (
    <div className="flex flex-col h-2/5 w-4/5 bg-white border border-gray-200 my-5 shadow-2xl rounded-lg overflow-hidden">
      <div className="flex text-5xl justify-center">{location.state.episode.title}</div>
      {console.log(location.state.episode)}
      <div className="flex justify-center text-sm">{location.state.episode.air_date}</div>
      {location.state.episode.characters.map((elem) => {
          return <div key={elem} className="flex justify-center truncate"><Link to = "/character" state = {{character: elem}} >{elem}</Link></div>
      })}
      <button className="flex justify-center text-slate-50 bg-slate-800 text-sm text-gray-700"><Link to = "/">back</Link></button>
   
    </div>
  );
}

export default EpisodeComponent;
