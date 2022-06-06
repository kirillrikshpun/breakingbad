import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function CharacterComponent() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.breakingbadapi.com/api/characters?category=Breaking+Bad"
      )
      .then((resp) => {
        setCharacters(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let arr = characters.filter(
    (elem) =>
      elem.name === location.state.character ||
      elem.nickname === location.state.character
  );

  return (
    <>
      {arr.length > 0 && (
        <div className="text-xl">
          <div className="flex justify-center">
            <img
              src={arr[0].img}
              className="p-1 bg-white border rounded max-w-sm"
            />
          </div>
          <div className="flex justify-between">
            <div>name: </div>
            <div className="text-slate-50">{arr[0].name}</div>
          </div>
          <div className="flex justify-between">
            <div>birthday: </div>
            <div className="flex justify-center text-slate-50">
              {arr[0].birthday}
            </div>
          </div>
          <div className="flex justify-between">
            <div>status: </div>
            <div className="flex justify-center text-slate-50">
              {arr[0].status}
            </div>
          </div>
          <div className="flex justify-between">
            <div>occupation: </div>
            {arr[0].occupation.map((elem) => {
              return (
                <div key={elem} className="flex justify-center text-slate-50">{elem}</div>
              );
            })}
          </div>
          <div className="flex justify-between">
            <div>nickname: </div>
            <div className="flex justify-center text-slate-50">
              {arr[0].nickname}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CharacterComponent;
