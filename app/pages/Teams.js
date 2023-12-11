import axiosGetUser from "@/utils/randomuser";
import Image from "next/image";
import Link from "next/link";

const fetchUsers = async () => {
  try {
    const res = await axiosGetUser.get("/api", {
      params: {
        results: 3,
      },
    });
    // console.log("ini datanya", res.data.results);

    const dataTeams = res.data.results.map((item) => {
      return {
        id: item.login.uuid,
        firstName: item.name.first,
        lastName: item.name.last,
        picture: item.picture.large,
      };
    });

    // console.log("dari data", dataTeams);
    return dataTeams;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const Teams = async () => {
  let teams = [];

  try {
    teams = await fetchUsers();
  } catch (error) {
    // Handle the error gracefully, e.g., display an error message
    console.error("Error loading team members:", error);
  }

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
                className=" w-[16rem] h-auto hover:scale-95 transition-all duration-300"
                src={team.picture}
                width={200}
                height={200}
                alt={`picture ${team.firstName}`}
              />
              <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12 ">
                <h3 className="mb-3 text-neutralGrey font-semibold">
                  {team.firstName} {team.lastName}
                </h3>
                <div className="flex items-center justify-center gap-8">
                  <Link
                    href={`/team/${team.firstName + "-" + team.lastName}`}
                    key={team.id}
                    className="font-bold text-brandPrimary transition-all duration-300 hover:text-neutral-700"
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

export default Teams;
