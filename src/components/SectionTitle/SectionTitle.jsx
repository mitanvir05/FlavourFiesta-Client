const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-3/12 ">
      <p className="text-yellow-400 mb-2"> ---{subHeading}---</p>
      <p className="text-4xl uppercase border-y-4 py-4 my-6">{heading}</p>
    </div>
  );
};

export default SectionTitle;
