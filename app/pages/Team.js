import Image from "next/image";
import Link from "next/link";

const Team = () => {
  const teams = [
    {
      id: 1,
      name: "Creating Streamlined Safeguarding Processes with OneRen",
      image: "/teams-image/image-18.png",
    },
    {
      id: 2,
      name: "What are your safeguarding responsibilities and how can you manage them?",
      image: "/teams-image/image-19.png",
    },
    {
      id: 3,
      name: "Revamping the Membership Model with Triathlon Australia",
      image: "/teams-image/image-20.png",
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-16">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
          Meet the team
        </h2>
        <p className="text-sm text-neutralGrey mb-12 md:w-3/4 mx-auto">
          Our strength lies in the diverse talents that make up the heart of
          Nextcent. Get to know the faces behind the scenes—introducing a team
          driven by creativity, expertise, and a shared commitment
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {teams.map((team) => {
          return (
            <div key={team.id} className="mx-auto relative mb-12">
              <Image
                className=" w-80"
                src={team.image}
                width={200}
                height={200}
                alt={`image ${team.name}`}
              />
              <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12 ">
                <h3>{team.name}</h3>
                <div className="flex items-center justify-center gap-8">
                  <Link
                    href="/"
                    className="font-bold text-brandPrimary hover:text-neutral-700"
                  >
                    See more...
                  
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
