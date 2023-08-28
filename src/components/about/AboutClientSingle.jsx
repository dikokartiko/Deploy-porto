const AboutClientSingle = ({ title, image, link }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          className="w-5 py-10 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-xl rounded-lg mb-8 cursor-pointer"
          style={{ height: "50%", width: "100%", objectFit: "contain" }}
          alt={title}
        />
      </a>
    </>
  );
};

export default AboutClientSingle;
