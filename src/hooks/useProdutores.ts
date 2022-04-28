import {useEffect, useState} from 'react';

import {carregaProdutores} from '../services/index';

export default function useProdutores() {
  const [titulo, setTitulo] = useState([]);
  const [lista, setLista] = useState([]);

  useEffect(() => {
    // executa uma vez quando o componente é montado
    const retorno = carregaProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
    console.log(retorno);
  }, []);

  return [titulo, lista];
}
