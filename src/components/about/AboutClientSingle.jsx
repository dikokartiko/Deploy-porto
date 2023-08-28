const AboutClientSingle = ({ title, image, link }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          className="w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
          style={{ height: "100%", objectFit: "contain" }}
          alt={title}
        />
      </a>
    </>
  );
};

export default AboutClientSingle;
