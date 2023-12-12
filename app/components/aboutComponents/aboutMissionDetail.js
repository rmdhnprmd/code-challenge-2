import Image from "next/image";

const AboutMissionDetail = () => {
  return (
    <div className="my-36">
      <div className="flex flex-col gap-10 lg:flex-row items-center justify-between lg:gap-5">
        <div className="flex flex-col gap-4 max-w-md">
          <h2 className="text-3xl font-bold text-neutralDGrey">Our Mission</h2>
          <p className=" text-neutralGrey">
            Building an enterprise level site doesn't need nightmare or cost
            your thousands. Felix is purpose built for ease of use and
            completxability to create.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/about/Tick.png"
                width={22}
                height={2}
                alt="check icon"
              />
              <p>Posting to social media, blogs, and messengers</p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/about/Tick.png"
                width={22}
                height={2}
                alt="check icon"
              />
              <p>Working with images and videos</p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/about/Tick.png"
                width={22}
                height={2}
                alt="check icon"
              />
              <p>The Future of Writing Blog Articles</p>
            </div>
          </div>
        </div>

        <Image
          src="/about/Image-3.png"
          width={300}
          height={200}
          alt="image-1 mission"
        />
        <Image
          src="/about/Image-4.png"
          width={300}
          height={200}
          alt="image-2 mission"
        />
      </div>
    </div>
  );
};

export default AboutMissionDetail;
