/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { http } from '../http/http';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [obejtivosFetch, setObejtivosFetch] = useState();
  const [projetosFetch, setProjetosFetch] = useState();
  const [etapasFetch, setEtapasFetch] = useState();
  const [statusFetch, setStatusFetch] = useState();
  const [diretoriasFetch, setDiretoriasFetch] = useState();
  const [responsavelFetch, setResponsavelFetch] = useState();

  useEffect(() => {
    http
      .get('objetivos')
      .then((res) => {
        setObejtivosFetch(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    http
      .get('projetos')
      .then((res) => {
        setProjetosFetch(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    http
      .get('etapas')
      .then((res) => {
        setEtapasFetch(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    http
      .get('status')
      .then((res) => {
        setStatusFetch(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    http
      .get('diretorias')
      .then((res) => {
        setDiretoriasFetch(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    http
      .get('responsavel')
      .then((res) => {
        setResponsavelFetch(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const apivalue = {
    obejtivosFetch,
    projetosFetch,
    etapasFetch,
    statusFetch,
    diretoriasFetch,
    responsavelFetch,
  };

  return <ApiContext.Provider value={apivalue}>{children}</ApiContext.Provider>;
};
