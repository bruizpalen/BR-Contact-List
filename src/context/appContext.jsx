import { useContext, createContext } from "react";
import { getAllContacts } from "../services/getAllContactFromAgenda";
import { useState, useEffect } from "react";

//Create context

const AppContext = createContext();

//Provider
export const ContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getAllContacts().then((res) => {
      // console.log(res)

      setContacts[res];
    });
  }, []);

  return <AppContext.Provider value={contacts}>{children}</AppContext.Provider>;
};

//Consumer
const useAppContext = () => useContext(AppContext);
export default useAppContext;
