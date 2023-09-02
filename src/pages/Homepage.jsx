import CardContact from "../components/CardContact/CardContact";
import useAppContext from "../context/appContext";
import { Link } from "react-router-dom";
import { getAllContacts } from "../services/getAllContactFromAgenda";
import { useState, useEffect } from "react";

const HomePage = () => {
  // const [contacts, setContacts] = useState([]);
  const { store } = useAppContext();
  const contacts = store.contacts;
  const { actions } = useAppContext();
  useEffect(() => {
    actions.updateContactList();
  }, [contacts]);

  // contacts.map((element, index) => {
  //   console.log(element.full_name, element.id);
  // });
  return (
    <>
      <div className="d-flex justify-content-end mx-3 mt-3 mb-1">
        <Link to={"/form"}>
          <button className="btn btn-success">Add new contact</button>
        </Link>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-3">
        <h1>Contact List for agenda: usuario24</h1>
      </div>
      <main className="container">
        {contacts.map((contact, index) => {
          return (
            <CardContact
              key={index}
              contactName={contact.full_name}
              contactEmail={contact.email}
              contactPhone={contact.phone}
              contactAddress={contact.address}
              contactId={contact.id}
            />
          );
        })}
      </main>
    </>
  );
};

export default HomePage;
