import loginImg from "../../assets/images/login-reg/login.svg";

const SignUp = () => {
  return (
    <section className="container mx-auto my-20 grid grid-cols-2 gap-6 justify-center items-center">
      <div>
        <img src={loginImg} alt="" />
      </div>
      <div className="border p-14 rounded-lg border-[#D0D0D0]">
        <h1 className="text-center text-3xl font-bold mb-8">Sign Up</h1>

        <form>
          <div className="form-control w-full mx-auto mb-5">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full mx-auto mb-5">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full mx-auto mb-5">
            <label className="label">
              <span className="label-text font-bold">Confirm Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered w-full"
            />
          </div>

          <button className="common-button">Signup</button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
