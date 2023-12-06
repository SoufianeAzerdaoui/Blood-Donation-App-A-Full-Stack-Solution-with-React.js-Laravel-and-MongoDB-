import React from 'react';
import { useState , useContext , createContext} from 'react';


const StateContext = createContext({
  currentUser :  {} ,
  userToken : null ,
  setCurrentUser : () => { } ,
  setUserToken : () => { }

});


const ContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState({

  });
  const [userToken, setUserToken] = useState('1234');

  return (
    <StateContext.Provider
      value = {{
        currentUser ,
        setCurrentUser,
        userToken,
        setUserToken,
      }}
    >

      {children}

    </StateContext.Provider>
  );
}

export default ContextProvider;
export const userStateContext = () => useContext(StateContext)
