import './Banner.css';

const Banner = () => {
  return (
    <div className="  banner  mx-auto rounded-xl flex items-center my-5">
      <div className="max-w-xxl text-white p-20">
        <h1 className="text-5xl font-bold py-5">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
        <p>
          There are many variations of passages available, but <br />
          the majority have suffered alteration in some form.
        </p>
        <button 
          className="border border-[#FF3811] px-3 py-2 bg-[#FF3811] text-white rounded-md mt-5 transition duration-200 hover:bg-white hover:text-[#FF3811]"
          aria-label="Get More Information"
        >
          Get More Info
        </button>
        <button 
          className="border border-white px-3 py-2 text-white rounded-md mt-2 ml-5 transition duration-200 hover:bg-white hover:text-[#FF3811]"
          aria-label="View Latest Projects"
        >
          Latest Project
        </button>
      </div>
    </div>
  );
};

export default Banner;
