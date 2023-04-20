import React, {createContext, useState} from 'react';

const MapContext = createContext();
export const MapProvider = props => {
  const [map, setMap] = useState('');
  const [status, setStatus] = useState('');
  const [promStatus, setPromStatus] = useState('');
  const [kills, setKills] = useState(0);
  const [asists, setAsists] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [matchType, setMatchType] = useState('');

  const cleanMap = () => {
    setMap('');
    setStatus('');
    setPromStatus('');
    setKills(0);
    setAsists(0);
    setDeaths(0);
  };

  return (
    <MapContext.Provider
      value={{
        map,
        setMap,
        status,
        setStatus,
        promStatus,
        setPromStatus,
        kills,
        setKills,
        asists,
        setAsists,
        deaths,
        setDeaths,
        matchType,
        setMatchType,
        cleanMap,
      }}>
      {props.children}
    </MapContext.Provider>
  );
};

export default MapContext;
