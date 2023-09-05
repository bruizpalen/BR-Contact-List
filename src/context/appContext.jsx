import { useContext, createContext } from "react";
import { getAllContacts } from "../services/getAllContactFromAgenda";
import { useState, useEffect } from "react";
import addNewContact from "../services/addNewContact";
import removeContact from "../services/removeContact";
import editContact from "../services/editContact";
//Create context

const AppContext = createContext();

//Provider
export const ContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const editContactFromList = ({ full_name, email, address, phone, id }) => {
    editContact({ full_name, email, address, phone, id });
    getAllContacts().then((res) => {
      setContacts(res);
    });
  };

  const updateContactList = () => {
    getAllContacts().then((res) => {
      setContacts(res);
    });
  };

  const removeContactById = (id) => {
    removeContact(id);
    getAllContacts().then((res) => {
      setContacts(res);
    });
  };

  useEffect(() => {
    getAllContacts().then((res) => {
      setContacts(res);
    });
  }, []);

  const store = {
    contacts,
  };

  const actions = {
    addNewContact,
    removeContactById,
    updateContactList,
    editContactFromList,
  };

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

//Consumer
const useAppContext = () => useContext(AppContext);
export default useAppContext;
