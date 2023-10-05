import { useEffect, useState } from "react";
import ServiceCard from "../../Cards/ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <section className="my-32">
      <h3 className="text-[#FF3811] text-2xl text-center mb-12 font-bold">
        Services
      </h3>
      <h1 className="my-5 text-4xl text-center font-bold">Our Service Area</h1>
      <p className="my-5 mx-auto w-1/2 text-center">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Service;
