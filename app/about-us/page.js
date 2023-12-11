import aboutImg from "@/public/about.svg";
import Image from "next/image";

export const metadata = {
  title: "Nextcent | About Us",
  description:
    "Welcome to Nextcent, where passion meets purpose. Founded 2022, we've embarked on a remarkable journey, shaping our vision into a dynamic reality",
};

const About = () => {
  return (
    <>
      {/* Twitter card metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Your Twitter Card Title" />
      <meta name="twitter:description" content="Description for Twitter card" />
      <meta name="twitter:image" content={aboutImg} />
      {/* Add more Twitter card meta tags as needed */}

      <div>
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
          <div>
            <div>
              <Image src={aboutImg} alt="about image" />
            </div>
            <div className="md:w-3/5 auto">
              <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:4/5">
                The unseen of spending three years at Pixelgrade
              </h2>
              <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
              <button className="btn-primary">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
