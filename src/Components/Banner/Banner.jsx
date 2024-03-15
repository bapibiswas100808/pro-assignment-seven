const Banner = () => {
  return (
    <div
      className="hero min-h-[600px] rounded-2xl"
      style={{
        backgroundImage: "url(https://i.ibb.co/3dXyr5q/banner.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white font-roboto">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-5 text-white font-poppins text-lg">
            Indulge in a personalized cooking experience with our bespoke
            classes, crafted to elevate your culinary skills and tantalize your
            taste buds!
          </p>
          <button className="btn mr-8 rounded-3xl bg-[#0BE58A] font-roboto hover:bg-transparent hover:text-white">
            Explore Now!
          </button>
          <button className="btn text-white rounded-3xl font-roboto hover:bg-[#0BE58A] hover:text-black">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
