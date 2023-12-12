import Image from "next/image";

const AboutMission = () => {
  return (
    <div
      className="flex flex-col items-center xl:flex-row xl:items-center xl:h-[100vh] gap-10 w-4/5 mx-auto px-12"
    >
      <div className="max-w-lg">
        <div>
          <Image
            src="/about/Image.png"
            alt="image hero"
            width={550}
            height={100}
          />
        </div>
        <div className="flex items-center justify-between gap-6 mt-6">
          <div className="flex flex-col items-center justify-center rounded-2xl h-full bg-[#E8F5E9] py-10 px-8">
            <h1 className="text-5xl font-bold text-neutralDGrey">500K</h1>
            <p className="text-sm text-neutralGrey">Daily Active Users</p>
          </div>
          <div>
            <Image src="/about/Image-2.png" width={320} height={100} />
          </div>
        </div>
      </div>

      <div className=" max-w-md">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-neutralDGrey">
            We're on a mission to bring ideas to life.
          </h1>
          <p className="text-lg text-neutralGrey">
            Building an enterprise level site doesn't need nightmare or cost
            your thousands. Felix is purpose built for ease of use and
            completxability to create even the most powerful of products.
          </p>
          <hr className=" border-t-[1px]" />
          <div className="flex items-center gap-6">
            <Image
              className=""
              src="/about/Icon-1.png"
              width={80}
              height={80}
            />
            <div className="w-3/5">
              <h3 className=" font-bold text-xl text-neutralDGrey">
                How technology started
              </h3>
              <p className=" text-xs text-neutralGrey">
                Building an enterprisedoesn't need your thousands.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Image
              className=""
              src="/about/Icon-2.png"
              width={80}
              height={80}
            />
            <div className="w-3/5">
              <h3 className=" font-bold text-xl text-neutralDGrey">
                Endless Possibilities
              </h3>
              <p className=" text-xs text-neutralGrey">
                Building an enterprisedoesn't need your thousands.
              </p>
            </div>
          </div>

          <button className=" bg-neutral-900 hover:bg-brandPrimary transition-all duration-300 text-slate-50 max-w-[180px] rounded-full px-8 py-5">
            Join our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
