import React, { useState, createContext, useEffect } from "react";
import structure from "../data/structure";

export const ConfigContext = createContext();

export const ConfigProvider = (props) => {
  const localStorageConfig =
    localStorage.getItem("config") &&
    JSON.parse(localStorage.getItem("config"));
  const [config, setConfig] = useState(localStorageConfig || false);

  useEffect(() => {
    if (structure && !config) {
      let defaultConfig = {};
      structure.forEach((step) => {
        if (step.parts)
          step.parts.forEach((part) => {
            if (part.options[0]) {
              defaultConfig[part.id] = part.options[0].id;
            }
          });
      });
      setConfig(defaultConfig);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("config", JSON.stringify(config));
  }, [config]);

  return (
    <ConfigContext.Provider value={[config, setConfig]}>
      {props.children}
    </ConfigContext.Provider>
  );
};
