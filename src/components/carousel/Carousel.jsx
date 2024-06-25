import { useState } from "preact/hooks";
import "./carousel.css";

const Carousel = ({ id, images, cover = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showImage = (index) => {
    setCurrentIndex((index + images.length) % images.length);
  };

  return (
    <div class="carousel" id={`${id}_images`}>
      {images.map((image, index) => (
        <img
          src={image}
          class={[
            index === currentIndex ? "active" : "",
            cover ? "active-cover" : "active-contain",
          ].join(" ")}
          key={index}
          alt={`Slide ${index + 1}`}
        />
      ))}
      <div class="controls">
        <button onClick={() => showImage(currentIndex - 1)} id="prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
              d="M328 112L184 256l144 144"
            ></path>
          </svg>
        </button>
        <button onClick={() => showImage(currentIndex + 1)} id="next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="80"
              d="M184 112l144 144-144 144"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
