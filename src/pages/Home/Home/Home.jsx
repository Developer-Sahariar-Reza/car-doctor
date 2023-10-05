import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <AboutUs />
      <Service />
    </div>
  );
};

export default Home;
