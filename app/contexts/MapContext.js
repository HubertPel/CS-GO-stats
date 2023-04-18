import React, {createContext, useState} from 'react';

const MapContext = createContext();
export const MapProvider = props => {
  const [map, setMap] = useState('');

  return (
    <MapContext.Provider value={{map, setMap}}>
      {props.children}
    </MapContext.Provider>
  );
};

export default MapContext;
