import React from "react";
import './HomeBody.css'
const HomeBody = () => {
  const eventTickets = [
    {
      date: "JUL16",
      Venue: "DETROIT MIDTE ENERGY MUSIC THEATRE",
      path: "BUY TICKETS",
    },
    {
      date: "JUL19",
      Venue: "TORONTO,ON BUDWEISER STAGE",
      path: "BUY TICKETS",
    },
    {
      date: "JUL 22",
      Venue: "BRISTOW, VAJIGGY LUBE LIVE",
      path: "BUY TICKETS",
    },
    {
      date: "JUL 29",
      Venue: "PHOENIX, AZ AK-CHIN PAVILION",
      path: "BUY TICKETS",
    },
    {
      date: "AUG 2",
      Venue: "LAS VEGAS, NVT-MOBILE ARENA",
      path: "BUY TICKETS",
    },
    {
      date: "AUG 7",
      Venue: "CONCORD, CA CONCORD PAVILION",
      path: "BUY TICKETS",
    },
  ];

  return (
    <div>
        <div  className="cont">
      {eventTickets.map((event) => (
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>{event.date}</h1>
            </div>
            <div className="col">
              <h1>{event.Venue}</h1>
            </div>
            <div className="col">
              <h1>{event.path}</h1>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className="cont2">
        <h1>GENERICS</h1>
      </div>
    </div>
  );
};

export default HomeBody;
