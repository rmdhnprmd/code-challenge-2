import Image from "next/image";

const SlideComponent = ({ className, heading, spanText, text, imgHero }) => {
  return (
    <div className={className}>
      <div>
        <Image src={imgHero} alt="banner" priority={true}/>
      </div>
      <div className="md:w-1/2">
        <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
          {heading}{" "}
          <span className="text-brandPrimary leading-snug">{spanText}</span>
        </h1>
        <p className=" text-neutralGrey text-base mb-8">{text}</p>
        <button className="btn-primary z-10">Register</button>
      </div>
    </div>
  );
};

export default SlideComponent;
