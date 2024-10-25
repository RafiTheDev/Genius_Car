const About = () => {
  return (
    <div className="container mx-auto flex justify-center gap-10 my-28">
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="grid items-center md:grid-cols-2 gap-52">
          <div className="pr-12 sm:pr-0">
            <div className="relative mb-12">
              <img 
                className="object-bottom rounded-md w-full h-auto max-w-lg" // Increased size here
                src="https://i.postimg.cc/5yTYqLQ0/Rectangle-4.png" 
                alt="Main image representing our services" 
              />
              <img 
                className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12 w-2/3 h-auto" // Adjust size for decorative image
                src="https://i.postimg.cc/VsVC8QZ8/Rectangle-5.png" 
                alt="Decorative accent image" 
              />
            </div>
          </div>

          <div>
            <h1 className="text-[#FF3811] font-bold">About Us</h1>
            <h2 className="mt-4 text-xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              We are qualified <br /> & have experience <br /> in this field
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              There are many variations of passages of Lorem Ipsum <br />
              available, but the majority have suffered alteration in some <br />
              form, by injected humour, or randomised words which do not <br />
              look even slightly believable.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              The majority have suffered alteration in some form, by injected <br />
              humour, or randomised words which do not look even slightly <br />
              believable.
            </p>
            <button 
              className="border border-[#FF3811] px-3 py-2 bg-[#FF3811] text-white rounded-md mt-4 transition duration-200 hover:bg-white hover:text-[#FF3811] focus:outline-none focus:ring-2 focus:ring-[#FF3811] focus:ring-opacity-50"
            >
              <p>Get More Info</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
