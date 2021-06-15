import React, { useEffect, useState } from "react";
import axios from "../api/axios";

function Row({ title, url }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(url);
      console.log(request);
    }
    fetchMovie();
  }, []);

  return (
    <div>
      <h2> {title} </h2>
    </div>
  );
}

export default Row;
