import Image from "next/image";

const AboutValues = () => {
  return (
    <div>
      <div className="text-center my-8 ">
        <h2 className=" text-3xl text-neutralDGrey font-semibold mb-14">
          Our Values
        </h2>

        <div className="grid items-center justify-center xl:grid-cols-3 sm:grid-cols-2 gap-y-10 gap-x-10 w-4/5 mx-auto">
          <div className="flex flex-col items-center justify-center max-w-xs p-10 gap-3 transition-all duration-300 border-transparent hover:border-slate-300 border-[1px] rounded-xl">
            <Image
              src="/about/Icon-value-1.png"
              width={50}
              height={50}
              alt="icon value 1"
            />
            <h2 className="text-xl font-semibold text-neutralDGrey">
              Innovation
            </h2>
            <p className="text-sm text-neutralGrey">
              Building an enterprisedoesn't need nightmare or cost your
              thousands Felix is purpose built.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center max-w-xs p-10 gap-3 transition-all duration-300 border-transparent hover:border-slate-300 border-[1px] rounded-xl">
            <Image
              src="/about/Icon-value-2.png"
              width={50}
              height={50}
              alt="icon value 2"
            />
            <h2 className="text-xl font-semibold text-neutralDGrey">Growth</h2>
            <p className="text-sm text-neutralGrey">
              Building an enterprisedoesn't need nightmare or cost your
              thousands Felix is purpose built.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center max-w-xs p-10 gap-3 transition-all duration-300 border-transparent hover:border-slate-300 border-[1px] rounded-xl">
            <Image
              src="/about/Icon-value-3.png"
              width={50}
              height={50}
              alt="icon value 3"
            />
            <h2 className="text-xl font-semibold text-neutralDGrey">
              Ownership
            </h2>
            <p className="text-sm text-neutralGrey">
              Building an enterprisedoesn't need nightmare or cost your
              thousands Felix is purpose built.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center max-w-xs p-10 gap-3 transition-all duration-300 border-transparent hover:border-slate-300 border-[1px] rounded-xl">
            <Image
              src="/about/Icon-value-4.png"
              width={50}
              height={50}
              alt="icon value 4"
            />
            <h2 className="text-xl font-semibold text-neutralDGrey">
              Team Work
            </h2>
            <p className="text-sm text-neutralGrey">
              Building an enterprisedoesn't need nightmare or cost your
              thousands Felix is purpose built.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center max-w-xs p-10 gap-3 transition-all duration-300 border-transparent hover:border-slate-300 border-[1px] rounded-xl">
            <Image
              src="/about/Icon-value-5.png"
              width={50}
              height={50}
              alt="icon value 5"
            />
            <h2 className="text-xl font-semibold text-neutralDGrey">
              Commitment
            </h2>
            <p className="text-sm text-neutralGrey">
              Building an enterprisedoesn't need nightmare or cost your
              thousands Felix is purpose built.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center max-w-xs p-10 gap-3 transition-all duration-300 border-transparent hover:border-slate-300 border-[1px] rounded-xl">
            <Image
              src="/about/Icon-value-6.png"
              width={50}
              height={50}
              alt="icon value 6"
            />
            <h2 className="text-xl font-semibold text-neutralDGrey">
              Positivity
            </h2>
            <p className="text-sm text-neutralGrey">
              Building an enterprisedoesn't need nightmare or cost your
              thousands Felix is purpose built.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
