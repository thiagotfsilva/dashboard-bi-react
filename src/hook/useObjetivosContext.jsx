import { useContext } from "react";
import { ObjetivosContext } from "../context/objetivos";

export const useObjetivosContext = () => {
    const data =  useContext(ObjetivosContext);
    return data;
 }