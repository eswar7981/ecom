import React from "react";
import "./HomeInfo.css";
const HomeInfo = () => {
  const events = [
    {
      id: 1,
      date: "JUL16",
      venue: " DETROIT, MI",
      location: " DTE ENERGY MUSIC THEATRE",
    },
    {
      id: 2,
      date: "JUL19",
      venue: " TORONTO,ON",
      location: " BUDWEISER STAGE",
    },
    {
      id: 3,
      date: "JUL 22",
      venue: "BRISTOW, VA",
      location: "    JIGGY LUBE LIVE",
    },
    {
      id: 4,
      date: "JUL 29",
      venue: "  PHOENIX, AZ",
      location: "   AK-CHIN PAVILION",
    },
    {
      id: 5,
      date: "AUG 2",
      venue: "  LAS VEGAS, NV",
      location: "   T-MOBILE ARENA",
    },
    {
      id: 6,
      date: "AUG 7",
      venue: "CONCORD, CA",
      location: "A  CONCORD PAVILION",
    },
  ];

  return (
    <>
    <div className="ti">
           <h1>Tours</h1>
        </div>
      <div className="event">
        
        <div>
          {events.map((item) => (
            <>
            <div className="det">
            <div className="info">
              <h5>{item.date}</h5>
              <h5>{item.venue}</h5>
              <h5>{item.location}</h5>
             
              </div>
              <div className="buy">
                <button>Buy Tickets</button>
              </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeInfo;
