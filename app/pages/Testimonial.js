import Image from "next/image";
import img from "@/public/testi.png";
import imgCompany1 from "@/public/company-logos/business-insider.png";
import imgCompany2 from "@/public/company-logos/buzzfeed.png";
import imgCompany3 from "@/public/company-logos/forbes.png";
import imgCompany4 from "@/public/company-logos/usa-today.png";
import Link from "next/link";

const Testimonial = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="md:flex md:flex-col lg:flex-row gap-10 items-center justify-center">
        <div>
          <Image
            src={img}
            alt="image-testimoni"
            width={380}
            height={380}
            priority
          />
        </div>

        <div className="md:w-2/3 mx-auto">
          <div>
            <p className=" md:w-4/5 text-sm text-neutralGrey mb-8 leading-6">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h5 className="text-brandPrimary text-xl font-semibold mb-2">
              Tim Smith
            </h5>
            <p className="text-base text-neutralGrey mb-6">
              British Dragon Boat Racing Association
            </p>
            <div className="flex items-center gap-8 flex-wrap">
              <Image
                src={imgCompany1}
                alt="image-company"
                width={70}
                priority
              />
              <Image
                src={imgCompany2}
                alt="image-company"
                width={70}
                priority
              />
              <Image
                src={imgCompany3}
                alt="image-company"
                width={70}
                priority
              />
              <Image
                src={imgCompany4}
                alt="image-company"
                width={70}
                priority
              />
              <div className="flex items-center gap-8">
                <Link
                  href="/"
                  className="font-bold text-brandPrimary transition-all duration-300 hover:text-neutral-700"
                >
                  Meet all customers...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
