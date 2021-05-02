import { useEffect, useContext, useState } from "react";
import { ConfigContext } from "../context/ConfigContext";
import structure from "../data/structure";

const useTotalPrice = () => {
  const [config] = useContext(ConfigContext);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (config) {
      let stepIds = Object.keys(config);
      setPrice(
        Object.values(config).reduce((total, id, index) => {
          structure.forEach((step) => {
            if (step.parts)
              step.parts.forEach((part) => {
                if (part.id === stepIds[index] && part.options)
                  part.options.forEach((option) => {
                    if (option.id === id && option.price) total += option.price;
                  });
              });
          });
          return total;
        }, 0)
      );
    }
  }, [config]);

  return price;
};

export default useTotalPrice;
