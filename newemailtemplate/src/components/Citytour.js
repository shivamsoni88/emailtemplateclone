import React from "react";
import "./Citytour.css";

const Citytour = () => {
  return (
    <div className="cityTour">
      <img
        src="https://i0.wp.com/oneday.travel/wp-content/uploads/one-day-travel-bangalore-to-mysore-sightseeing-tour-package-private-car-header.jpg?fit=1920%2C1280&ssl=1"
        className="cityLogo"
      />

      <div className="cityHeading">
        <div className="tourHeading">Bengaluru City Tour</div>

        <p className="para">
          see the top attraction of Banguluru on a full day Tour. Visit the
          ISKCON Temple. Tipu Sultan Fort and <br />
          Palace. Lalbag Botanical garden,and more
        </p>
      </div>
    </div>
  );
};

export default Citytour;
