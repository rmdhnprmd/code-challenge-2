import Image from "next/image";


const ServiceFeature = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments.",
      image: "/icon-1.png",
      alt: "Image Membership Organisations",
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Elevate your national association with our powerful features streamlined communication to efficient event management.",
      image: "/icon-2.png",
      alt: "Image National Associations",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Transform the way you nurture clubs and groups within your community. Our software simplifies the complexities.",
      image: "/icon-3.png",
      alt: "Image Clubs And Groups",
    },
  ];

  return (
    <>
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-neutralDGrey font-semibold mb-2">
          Manage your entire commnunity in a single system
        </h2>
        <p className="text-neutralGrey">Who is Nextcent suitable for?</p>
      </div>
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 gap-y-12 gap-x-12 xl:gap-x-28 mx-auto">
        {services.map((service) => {
          console.log(service.image)
          const { id, title, description, image, alt } = service;
          return (
            <div
              key={id}
              className="px-8 py-8 text-center  mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                <div className="w-14 mx-auto">
                  <Image src={image} alt={alt} width={100} height={100} />
                </div>
                <h4 className=" text-2xl font-bold text-neutralDGrey mb-2 px-2">
                  {title}
                </h4>
                <p className="text-sm text-neutralGrey">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServiceFeature;
