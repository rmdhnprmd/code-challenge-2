import Image from "next/image";

const Team = ({ params }) => {
  console.log(params);
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-20">
        <div>
          <Image  />
          <div className="md:w-3/5 auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:4/5">
              Page Team - {params.slug}
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="btn-primary">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
