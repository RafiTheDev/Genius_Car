const About = () => {
  return (
    <div className="container mx-auto flex justify-center gap-10">
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="grid items-center md:grid-cols-2 gap-32">
          <div className="pr-12 sm:pr-0">
            <div className="relative max-w-xs mb-12">
              <img 
                className="object-bottom rounded-md" 
                src="https://i.postimg.cc/5yTYqLQ0/Rectangle-4.png" 
                alt="Main image representing our services" 
              />
              <img 
                className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" 
                src="https://i.postimg.cc/VsVC8QZ8/Rectangle-5.png" 
                alt="Decorative accent image" 
              />
            </div>
          </div>

          <div>
            <h1 className="text-[#FF3811] font-bold">About Us</h1>
            <h2 className="mt-4 text-xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              We are qualified <br /> & of experience <br /> in this field
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
              className="border border-[#FF3811] px-3 py-2 bg-[#FF3811] text-white rounded-md mt-4 transition duration-200 hover:bg-white hover:text-[#FF3811]"
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
