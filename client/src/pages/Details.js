import React from "react";
import axios from "axios";

export default function Details() {

  const url = "https://kitsu.io/api/edge/anime" + window.location.pathname;

  const details = axios.get(url);

  console.log(details);

  return (<div>This is the details page</div>);
}
