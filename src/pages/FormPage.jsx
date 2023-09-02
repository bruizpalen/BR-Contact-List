import Input from "../components/Input/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAppContext from "../context/appContext";

const FormPage = () => {
  const { store } = useAppContext();
  const { actions } = useAppContext();
  console.log(store["contacts"]);
  console.log(store["contacts"].map((element) => element.id));

  const [contactData, setContactData] = useState({
    full_name: "",
    email: "",
    address: "",
    agenda_slug: "usuario24",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setContactData({
      ...contactData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addNewContact(contactData);
    setContactData({
      full_name: "",
      email: "",
      address: "",
      id: "",
      agenda_slug: "usuario24",
      phone: "",
    });
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <h1>Add new contact</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          id="full_name"
          placeholder="Enter full name"
          type="text"
          label="Full name"
          onChangeInput={handleInputChange}
          value={contactData["full_name"]}
        ></Input>
        <Input
          id="email"
          placeholder="Enter email"
          type="text"
          label="Email"
          onChangeInput={handleInputChange}
          value={contactData["email"]}
        ></Input>
        <Input
          id="phone"
          placeholder="Enter phone number"
          type="tel"
          label="Phone number"
          onChangeInput={handleInputChange}
          value={contactData["phone"]}
        ></Input>
        <Input
          id="address"
          placeholder="Enter address"
          type="text"
          label="Address"
          onChangeInput={handleInputChange}
          value={contactData["address"]}
        ></Input>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
      <Link to="/">
        <span className="ms-5">Get back to contacts</span>
      </Link>
    </>
  );
};

export default FormPage;
