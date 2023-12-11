import Image from "next/image";
import icon1 from "@/public/about-icons/Icon-1.png";
import { LiaHandshakeSolid, LiaUsersSolid, LiaBookOpenSolid, LiaCreditCard } from "react-icons/lia";

const AboutIndex = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="md:flex md:flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 ">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:4/5">
            Helping a local <br />{" "}
            <span className="text-brandPrimary">business reinvent itself</span>
          </h2>
          <p className="md:w-3/4 text-sm text-neutralGrey mb-8 lg:mb-0">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="md:w-1/2 mx-auto lg:flex items-center justify-center">
          <div className="grid sm:grid-cols-2 gap-x-14 gap-y-8">
            <div className="flex items-center gap-4">
              <LiaUsersSolid size={"2.4em"} color={"#4caf4f"} />
              <div>
                <h4 className="text-2xl text-neutralDGrey font-semibold">
                  2,245,341
                </h4>
                <p>Members</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <LiaHandshakeSolid size={"2.4em"} color={"#4caf4f"} />
              <div>
                <h4 className="text-2xl text-neutralDGrey font-semibold">
                46,328
                </h4>
                <p>Clubs</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
            <LiaBookOpenSolid size={"2.4em"} color={"#4caf4f"} />
              <div>
                <h4 className="text-2xl text-neutralDGrey font-semibold">
                828,867
                </h4>
                <p>Event Bookings</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <LiaCreditCard size={"2.4em"} color={"#4caf4f"} />
              <div>
                <h4 className="text-2xl text-neutralDGrey font-semibold">
                1,926,436
                </h4>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIndex;
