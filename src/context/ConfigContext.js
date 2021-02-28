import React, { useState, createContext, useEffect } from "react";
export const ConfigContext = createContext();
export const ConfigProvider = (props) => {
  const [config, setConfig] = useState(localStorage.getItem("config"));

  useEffect(() => {
    if (config) localStorage.setItem("config", JSON.stringify(config));
  }, [config]);

  return (
    <ConfigContext.Provider value={[config, setConfig]}>
      {props.children}
    </ConfigContext.Provider>
  );
};
