interface FlightGalleryProps {
  images?: string[];
}

const FlightGallery: React.FunctionComponent<FlightGalleryProps> = ({
  images,
}) => {
  return (
    <div className="galleryContainer">
      <ul className="images">
        {images.map((src, index) => (
          <li key={index}>
            <img className="img" src={src} alt={src} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightGallery;
