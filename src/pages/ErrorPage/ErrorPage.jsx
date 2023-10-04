import { Link, useRouteError } from "react-router-dom";
import errorImage from "../../assets/images/404/error.svg";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="w-1/2 mx-auto mt-16">
      <div>
        <img className="object-cover" src={errorImage} alt="" />
      </div>

      <div className="mt-12">
        <h1 className="text-7xl font-bold mb-5 text-center text-[#ff3927]">
          {status}
        </h1>
        <h1 className="text-3xl font-bold mb-5 text-center text-[#ff3927]">
          {error?.message}
        </h1>
      </div>

      <div className="text-center mb-8">
        <Link to="/">
          <button className="common-button">Go Home</button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
