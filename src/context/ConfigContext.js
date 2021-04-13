import React, { useState, createContext, useEffect } from "react";
export const ConfigContext = createContext();

export const ConfigProvider = (props) => {
  const localStorageConfig =
    localStorage.getItem("config") &&
    JSON.parse(localStorage.getItem("config"));
  const [config, setConfig] = useState(localStorageConfig || {});

  useEffect(() => {
    if (config) localStorage.setItem("config", JSON.stringify(config));
  }, [config]);

  return (
    <ConfigContext.Provider value={[config, setConfig]}>
      {props.children}
    </ConfigContext.Provider>
  );
};
