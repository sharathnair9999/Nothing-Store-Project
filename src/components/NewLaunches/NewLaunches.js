import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Heading";

const NewLaunches = () => {
  const newLaunches = [
    {
      product: "Oculus Touch",
      url: "https://res.cloudinary.com/sharath-media-library/image/upload/v1647442073/nothing-store-project/oculus-touch_mtie4m.jpg",
    },
    {
      product: "PlayStation 5",
      url: "https://res.cloudinary.com/sharath-media-library/image/upload/v1647442070/nothing-store-project/ps5_bo64cw.jpg",
    },
  ];
  return (
    <div>
     <Heading text={"New Launches"}/>

      <div className="new-launches flex">
        {newLaunches.map(({ product, url }) => {
          return (
            <Link key={url} to="/">
              <div className="launch flex-and-center">
                <img src={url} alt={product} className="launch-image" />
                <section>
                  <section className="mb-1">
                    <h2>Newly Introduced</h2>
                    <h3>{product}</h3>
                  </section>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, magni.
                  </p>
                </section>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NewLaunches;
