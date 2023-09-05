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

  // useEffect(() => {
  //   actions.updateContactList();
  // }, []);

  console.log(contacts);
  // contacts.map((element, index) => {
  //   console.log(typeof Number(id), typeof element.id);
  //   Number(id) === element.id && console.log(element.full_name, index);
  // });
  const indexToEdit = contacts.findIndex((contact) => {
    contact.id === Number(id);

    return contact.id;
  });
  // console.log("Contact to edit", contacts[indexToEdit]);
  // Object.keys(contacts[indexToEdit]).map((element) => {
  //   console.log(element);
  // });
  const [contactToEdit, setContactToEdit] = useState(contacts[indexToEdit]);

  const handleEditInput = (e) => {
    const { id: field, value } = e.target;
    setContactToEdit((prevContactToEdit) => ({
      ...prevContactToEdit,
      [field]: value,
    }));
    console.log("Hello", contactToEdit);
  };

  const handleUpdateContact = (e) => {
    e.preventDefault();
    console.log(contactToEdit);
    actions.editContactFromList(contactToEdit);
  };
  console.log(contactToEdit);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>Hello</h1>
        <p>ID: {id}</p>
      </div>
      <form className="mx-5" onSubmit={handleUpdateContact}>
        <Input
          id="full_name"
          placeholder="Enter full name"
          type="text"
          label="Full name"
          onChangeInput={(e) => handleEditInput(e, id)}
          // value={contactToEdit.full_name}
        ></Input>
        {/* <label>Full name</label>
        <input
          type="text"
          placeholder={contacts[indexToEdit].full_name}
          className="form-control m-2"
          // onChange={(e) => handleEditInfo(e, full_name)}
          // value={store.contact[indexToEdit][full_name]}
        ></input>

        <label>Email</label>
        <input
          type="text"
          placeholder={contacts[indexToEdit].email}
          className="form-control m-2"
          // onChange={(e) => handleEditInfo(e, full_name)}
          // value={store.contact[indexToEdit][full_name]}
        ></input>

        <label>Phone</label>
        <input
          type="text"
          placeholder={contacts[indexToEdit].phone}
          className="form-control m-2"
          // onChange={(e) => handleEditInfo(e, full_name)}
          // value={store.contact[indexToEdit][full_name]}
        ></input>

        <label>Address</label>
        <input
          type="text"
          placeholder={contacts[indexToEdit].address}
          className="form-control m-2"
          // onChange={(e) => handleEditInfo(e, full_name)}
          // value={store.contact[indexToEdit][full_name]}
        ></input> */}
        <button className="btn btn-primary">Submit</button>
      </form>

      <Link to="/">
        <span className="ms-5">Get back to contacts</span>
      </Link>
    </>
  );
};

export default EditContactForm;
