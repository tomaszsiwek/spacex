import MyPagination from "components/MyPagination";
// import { useState } from "react";

interface FlightGalleryProps {}

const images = [
  "https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg",
  "https://live.staticflickr.com/65535/50618376731_43ddaab1b8_o.jpg",
  "https://live.staticflickr.com/65535/50618376671_ba4e60af7c_o.jpg",
  "https://live.staticflickr.com/65535/50618376351_ecfdee4ab2_o.jpg",
  "https://live.staticflickr.com/65535/50618727917_01e579c4d9_o.jpg",
  "https://live.staticflickr.com/65535/50618355216_2872d1fe98_o.jpg",
  "https://live.staticflickr.com/65535/50618354801_ff3e722884_o.jpg",
  "https://live.staticflickr.com/65535/50618463487_41642939a4_o.jpg",
  "https://live.staticflickr.com/65535/50617619613_5630422345_o.jpg",
  "https://live.staticflickr.com/65535/50617619668_d680d7319c_o.jpg",
  "https://live.staticflickr.com/65535/50617625523_a7484e0abf_o.jpg",
  "https://live.staticflickr.com/65535/50618469202_fa86f88ab3_o.jpg",
  "https://live.staticflickr.com/65535/50617625183_8554412cee_o.jpg",
  "https://live.staticflickr.com/65535/50618470472_fb8e6507d7_o.jpg",
  "https://live.staticflickr.com/65535/50617626838_c0c71de1f7_o.jpg",
  "https://live.staticflickr.com/65535/50617626738_aa3997aaea_o.jpg",
  "https://live.staticflickr.com/65535/50617626408_fb0bba0f89_o.jpg",
];

const FlightGallery: React.FunctionComponent<FlightGalleryProps> = () => {
  // const [imgIndex, setImgIndex] = useState(0);

  return (
    <>
      <div className="galleryContainer">
        {images.map((src) => (
          <img src={src} alt={src} key={src} />
        ))}
      </div>
      <MyPagination
        totalPages={images.length}
        onPageChange={() => console.log("aaa")}
        value={1}
      />
    </>
  );
};

export default FlightGallery;
