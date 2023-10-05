import carouselImg1 from "../../../assets/images/homeCarousel/1.jpg";
import carouselImg2 from "../../../assets/images/homeCarousel/2.jpg";
import carouselImg3 from "../../../assets/images/homeCarousel/3.jpg";
import carouselImg4 from "../../../assets/images/homeCarousel/4.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full my-12 h-[570px] rounded-lg">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={carouselImg1} className="w-full object-fill" />
        <div className="absolute flex items-center h-full left-0 top-72 transform -translate-y-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.25)]">
          <div className="text-white pl-12">
            <h1 className="text-6xl font-bold mb-5 w-1/3">
              Affordable Price For Car Servicing
            </h1>
            <p className="mb-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="common-button mr-5">Discover More</button>
              <button className="common-button2">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] mr-4 text-white border-0"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] text-white border-0"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={carouselImg2} className="w-full object-fill" />
        <div className="absolute flex items-center h-full left-0 top-72 transform -translate-y-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.25)]">
          <div className="text-white pl-12">
            <h1 className="text-6xl font-bold mb-5 w-1/3">
              Affordable Price For Car Servicing
            </h1>
            <p className="mb-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="common-button mr-5">Discover More</button>
              <button className="common-button2">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="btn btn-circle mr-5 bg-[#FF3811] hover:bg-[#FF3811] text-white border-0"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] text-white border-0"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={carouselImg3} className="w-full object-fill" />
        <div className="absolute flex items-center h-full left-0 top-72 transform -translate-y-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.25)]">
          <div className="text-white pl-12">
            <h1 className="text-6xl font-bold mb-5 w-1/3">
              Affordable Price For Car Servicing
            </h1>
            <p className="mb-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="common-button mr-5">Discover More</button>
              <button className="common-button2">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="btn btn-circle mr-5 bg-[#FF3811] hover:bg-[#FF3811] text-white border-0"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] text-white border-0"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={carouselImg4} className="w-full object-fill" />
        <div className="absolute flex items-center h-full left-0 top-72 transform -translate-y-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.25)]">
          <div className="text-white pl-12">
            <h1 className="text-6xl font-bold mb-5 w-1/3">
              Affordable Price For Car Servicing
            </h1>
            <p className="mb-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="common-button mr-5">Discover More</button>
              <button className="common-button2">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] mr-5 text-white border-0"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-[#FF3811] hover:bg-[#FF3811] text-white border-0"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
