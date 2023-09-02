import { useContext, createContext } from "react";
import { getAllContacts } from "../services/getAllContactFromAgenda";
import { useState, useEffect } from "react";
import addNewContact from "../services/addNewContact";
import removeContact from "../services/removeContact";
//Create context

const AppContext = createContext();

//Provider
export const ContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
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
