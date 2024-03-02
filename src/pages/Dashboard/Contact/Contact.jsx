import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <div>
        <SectionTitle
        heading='Contact'
        subHeading="Send your message"
        ></SectionTitle>
      <label className="input input-bordered flex items-center gap-2 my-4">
        Name
        <input type="text" className="grow" placeholder="" />
      </label>
      <label className="input  my-4 input-bordered flex items-center gap-2">
        Email
        <input type="text" className="grow"  placeholder="" />
      </label>
      <label className="input  my-4 input-bordered input-lg flex items-center gap-2">
        Message
        <input type="text" className="grow"  placeholder="" />
      </label>
      <button className="btn btn-primary">Submit</button>
      
    </div>
  );
};

export default Contact;
