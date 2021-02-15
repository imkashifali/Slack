import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newArticles = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticles("React on Top Rated ", "Sunday News")}
      {newArticles("twitter top trend pakistan ", "Sunday News")}
      {newArticles("Keep track of the latest Twitter  ", "Sunday News")}
      {newArticles("Happy Birthday SZAB ", "Sunday News")}
      {newArticles(
        "Following are the list of today's top twitter ",
        "Sunday News"
      )}
      {newArticles(
        "Coronavirus disease (COVID-19) is an infectious ",
        "Sunday News"
      )}
      {newArticles(
        "NCOC launched a WhatsApp number for registration ",
        "Sunday News"
      )}
      {newArticles("COVID-19 Deaths Per Day ", "Sunday News")}
    </div>
  );
};

export default Widgets;
