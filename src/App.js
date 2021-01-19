import React, {useState } from "react";
import "./App.css";

function App() {
  const initialImages = [
    "images/image_part_001.jpg",
    "images/image_part_002.jpg",
    "images/image_part_003.jpg",
    "images/image_part_004.jpg",
    "images/image_part_005.jpg",
    "images/image_part_006.jpg",
    "images/image_part_007.jpg",
    "images/image_part_008.jpg",
    "images/image_part_009.jpg",
    "images/image_part_010.jpg",
    "images/image_part_011.jpg",
    "images/image_part_012.jpg",
    "images/image_part_013.jpg",
    "images/image_part_014.jpg",
    "images/image_part_015.jpg",
    "images/image_part_016.jpg",
  ];

  const [imagesPosition, setImagesPosition] = useState(initialImages);

  const [classname, setClassName] = useState("");
  const handleClick = () => {
    let shuffled = imagesPosition
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
    setImagesPosition(shuffled);
    setClassName("enter");
      setTimeout(() => {
        setClassName("leave");
      }, 1000);
    setTimeout(() => {
      setClassName("normal");
    },1100);
  };

  return (
    <div className="gridContainer">
      {imagesPosition.map((image, index) => (
        <img
          className={classname}
          key={index}
          src={image}
          alt=""
        />
      ))}

      <button onClick={handleClick} className="shuffle">
        Shuffle
      </button>
      <button onClick={() => setImagesPosition(initialImages)}>
        Unshuffle
      </button>
    </div>
  );
}

export default App;
