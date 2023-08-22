import { createContext } from 'react';

export const WatchListContext = createContext();

const GlobalContextProvider = (props) => {

  return (
    <WatchListContext.Provider
      value={{}}
    >
      {props.children}
    </WatchListContext.Provider>
  );
};

export default GlobalContextProvider