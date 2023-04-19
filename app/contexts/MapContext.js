import React, {createContext, useState} from 'react';

const MapContext = createContext();
export const MapProvider = props => {
  const [map, setMap] = useState('');
  const [status, setStatus] = useState('');
  const [promStatus, setPromStatus] = useState('');
  return (
    <MapContext.Provider
      value={{map, setMap, status, setStatus, promStatus, setPromStatus}}>
      {props.children}
    </MapContext.Provider>
  );
};

export default MapContext;
