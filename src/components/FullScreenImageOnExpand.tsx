import React, { useEffect, useState } from "react";
import JangFalls from "../images/jang_falls.png?url";

export const FullScreenImage = (): React.JSX.Element => {
  const [expandImage, setExpandImage] = useState(false);

  useEffect(() => {
    if (expandImage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [expandImage]);

  return (
    <>
      <div
        className={`group z-[12] transition-all ease-in-out duration-500 hover:cursor-pointer ${expandImage ? "scale-125 fixed flex origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : "mt-6 relative"}`}
        onClick={() => {
          if (window.screen.width >= 1024) {
            setExpandImage(!expandImage);
          }
        }}
      >
        <img
          id="jang-falls-image"
          src={JangFalls}
          alt="Image of Jang Falls Tawang District"
          className={`rounded-xl mx-auto w-fit h-auto peer`}
        />
        <div className="absolute top-0 w-full h-full lg:group-hover:flex text-black bg-opacity-50 hidden">
          <p className="m-auto font-bold">
            Click to {expandImage ? "collapse" : "expand"}
          </p>
        </div>
      </div>
      <div
        className={`${
          expandImage
            ? "fixed left-0 top-0 z-[11] h-screen w-screen backdrop-blur-sm"
            : "hidden"
        }`}
      ></div>
    </>
  );
};
