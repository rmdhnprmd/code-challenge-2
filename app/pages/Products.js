import Image from "next/image";
import Link from "next/link";
import Ilustrator from "@/public/products-illustrator.svg";

const Products = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Elevate your website's design with our exclusive insights on
              crafting a captivating site footer. In this section, we unveil the
              artistry behind our own website footer, sharing the strategies and
              design principles that set us apart. 
            </p>
            <button className="btn-primary">
              <Link href={""}>Learn more</Link>
            </button>
          </div>

          <div>
            <Image src={Ilustrator} alt="about-overview-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
