import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Header() {
  return (
    <Grid item xs={12}>
      <div
        style={{
          textAlign: "center",
          color: "#fff",
          backgroundColor: "#263238",
          padding: "1px",
        }}
      >
        {/* Page title in Englsh and Japanese */}
        <h1 style={{ fontSize: "72px", margin: "10px" }}>ニッポンメディア！</h1>
        <h2 style={{ fontSize: "48px", margin: "10px" }}>Nippon Media.</h2>
        <h3 style={{ fontSize: "24x" }}>
          Discuss your favorite Anime and Manga.
        </h3>
      </div>
    </Grid>
  );
}
