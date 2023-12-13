/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";
import { http } from "../http/http";

export const ObjetivosContext = createContext();

export const ObjetivosProvider = ({ children }) => {
  const [obejtivosFetch, setObejtivosFetch] = useState();

  useEffect(() => {
    http
      .get("objetivos")
      .then((res) => {
        setObejtivosFetch(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <ObjetivosContext.Provider value={obejtivosFetch}>
      {children}
    </ObjetivosContext.Provider>
  );
};
