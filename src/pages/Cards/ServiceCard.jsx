import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions flex justify-between items-center">
          <p>Price: {price}</p>
          <Link>
            <button className="common-button">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
