import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeComponent from "./HomeComponent"


function MainComponent() {
    const [data, setData] = useState([])

    useEffect(() => {
      axios
        .get("https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad")
        .then((resp) => {
          setData(resp.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }, []);


  return (
    <>
        <div className="flex flex-row">
            {data.length > 0 && <HomeComponent data = {data}/>}
        </div>
    </>
    
  );
}

export default MainComponent;
