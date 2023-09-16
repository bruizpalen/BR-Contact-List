import React from "react";
import { useParams } from "react-router-dom";
import useAppContext from "../context/appContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Input from "../components/Input/Input";
import { useMemo } from "react";

const EditContactForm = () => {
  const { id } = useParams(); // id of the contact that has to be edit
  const { store } = useAppContext();
  const contacts = store.contacts;
  const { actions } = useAppContext();

  if (contacts.length === 0) {
    return <div>Loading</div>;
  }

  console.log(id);
  console.log("Hello", contacts);
  // contacts.map((element, index) => {
  //   console.log(typeof Number(id), typeof element.id);
  //   Number(id) === element.id && console.log(element.full_name, index);
  // });
  let indexToEdit = null;
  contacts.map((element) => {
    if (element.id === Number(id)) {
      indexToEdit = element.id;
    }
  });

  const targetContact = contacts.find((contact) => contact.id === indexToEdit);
  console.log(targetContact.full_name);
  // console.log("Contact to edit", contacts[indexToEdit]);
  // Object.keys(contacts[indexToEdit]).map((element) => {
  //   console.log(element);
  // });

  const [contactToEdit, setContactToEdit] = useState({
    full_name: targetContact.full_name,
    email: targetContact.email,
    phone: targetContact.phone,
    address: targetContact.address,
  });

  const handleEditInput = (e) => {
    const { id: field, value } = e.target;
    // Update only the field being edited while maintaining other field values
    setContactToEdit((prevContactToEdit) => ({
      ...prevContactToEdit,
      [field]: value,
    }));
  };

  const handleUpdateContact = (e) => {
    e.preventDefault();
    // Create a copy of the original contact and update it with the edited values
    const updatedContact = {
      ...targetContact,
      ...contactToEdit,
    };
    actions.editContactFromList(updatedContact);
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>Hello</h1>
        <p>ID: {id}</p>
      </div>
      <form className="mx-5" onSubmit={handleUpdateContact}>
        <Input
          id="full_name"
          placeholder="Full name"
          type="text"
          label="Full name"
          onChangeInput={handleEditInput}
          value={contactToEdit.full_name}
        />
        <Input
          id="email"
          placeholder="Email"
          type="text"
          label="Email"
          onChangeInput={handleEditInput}
          value={contactToEdit.email}
        />
        <Input
          id="phone"
          placeholder="Phone"
          type="text"
          label="Phone"
          onChangeInput={handleEditInput}
          value={contactToEdit.phone}
        />
        <Input
          id="address"
          placeholder="Address"
          type="text"
          label="Address"
          onChangeInput={handleEditInput}
          value={contactToEdit.address}
        />
        <button className="btn btn-primary">Submit</button>
      </form>

      <Link to="/">
        <span className="ms-5">Get back to contacts</span>
      </Link>
    </>
  );
};

export default EditContactForm;
