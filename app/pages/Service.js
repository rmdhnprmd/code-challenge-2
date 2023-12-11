import OurClient from "../components/serviceComponents/OurClient.module.js";
import ServiceFeature from "../components/serviceComponents/ServiceFeature.module.js";

const Service = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <OurClient />

      <ServiceFeature />
    </div>
  );
};

export default Service;
