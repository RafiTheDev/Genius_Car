
const Services = () => {
  const services=[
    {
      id: 1,
      name: "Electrical System",
      price: 20,
      image: "https://i.postimg.cc/DZyzFvXb/Rectangle-7.png",
    },

    {
      id: 2,
      name: "Engine Diagnostics",
      price: 15,
      image: "https://i.postimg.cc/P5S9MmJn/Rectangle-75.png",
    },
    {
      id: 3,
      name: "Engine Diagnostics",
      price: 15,
      image: "https://i.postimg.cc/4xzcV5xB/Rectangle-8.png",
    },
    {
      id: 4,
      name: "Engine Diagnostics",
      price: 15,
      image: "https://i.postimg.cc/kXNYsLwb/Rectangle-9.png",
    },
    {
      id: 5,
      name: "Engine Diagnostics",
      price: 15,
      image: "https://i.postimg.cc/q77k4sg1/Rectangle-10.png",
    },
    {
      id: 6,
      name: "Engine Diagnostics",
      price: 15,
      image: "https://i.postimg.cc/XvDyb7Ny/Rectangle-11.png",
    },
    {
      id: 7,
      name: "Engine Diagnostics",
      price: 15,
      image: "https://i.postimg.cc/DZyzFvXb/Rectangle-7.png",
    },
    {
      id: 8,
      name: "Engine Diagnostics",
      price: 15,
      image: "https://i.postimg.cc/DZyzFvXb/Rectangle-7.png",
    },
    {
      id: 9,
      name: "Engine Diagnostics",
      price: 15,
      image: "https://i.postimg.cc/DZyzFvXb/Rectangle-7.png",
    },
    {
      id: 10,
      name: "Engine Diagnostics",
      price: 15,
      image: "https://i.postimg.cc/DZyzFvXb/Rectangle-7.png",
    },
    

    
  ]
  return (
    <div>
      <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto mb-5 mt-5">
        {
        services.map ((service)=>(

          <div key={service.id }>
            <div className="card bg-base-100 w-96 shadow-md">

  <figure className="px-10 pt-10  ">
    <img
      src={service.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body  ">
    <h2 className="card-title ">{service.name}</h2>

    <p className="text-[#FF3811]">
      <b>Price: $ {service.price}</b>
    </p>
    
  </div>
</div>
          </div>
        ))
        }
       
      </div>
    </div>
    </div>
  )
}

export default Services