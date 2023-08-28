import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import AboutClientSingle from "./AboutClientSingle";

const AboutClients = () => {
  const { clientsData, clientsHeading } = useContext(AboutMeContext);

  return (
    <div className="mt-10 sm:mt-20">
      <p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
        {clientsHeading}
      </p>
      <div className="grid p-56 w-32 grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
        {clientsData.map((client) => (
          <AboutClientSingle
            title={client.title}
            image={client.img}
            key={client.id}
            link={client.link}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutClients;
