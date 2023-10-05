import about1 from "../../../assets/images/about_us/person.jpg";
import about2 from "../../../assets/images/about_us/parts.jpg";
const AboutUs = () => {
  return (
    <section className="mt-24">
      <h1 className="text-[#FF3811] text-2xl text-center mb-12 font-bold">
        About Us
      </h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="relative">
          <img src={about1} alt="" className="w-[460px] h-[470px] rounded-lg" />
          <img
            src={about2}
            alt=""
            className="w-[327px] h-[332px] absolute top-56 left-44 border rounded-lg"
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl font-bold w-1/2">
            We are qualified & of experience in this field
          </h2>
          <p className="mb-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="mb-8">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div>
            <button className="common-button">Get More Info</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
