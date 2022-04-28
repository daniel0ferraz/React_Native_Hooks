import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import useProdutores from '../../hooks/useProdutores';

import Produtor from '../Produtor';
import * as Styled from './styles';

export default function Produtores({header: Header}) {
  const [titulo, lista] = useProdutores();
  // const [titulo, setTitulo] = useState<Props[]>([]);
  // const [lista, setLista] = useState([]);

  // useEffect(() => {
  //   // executa uma vez quando o componente é montado
  //   const retorno = carregaProdutores();
  //   setTitulo(retorno.titulo);
  //   setLista(retorno.lista);
  //   console.log(retorno);
  // }, []);

  const HeaderList = () => {
    return (
      <>
        <Header />
        <Styled.TitleProductores>{titulo}</Styled.TitleProductores>
      </>
    );
  };

  return (
    <View>
      <FlatList
        data={lista}
        renderItem={({item}) => <Produtor {...item} />}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={HeaderList}
      />
    </View>
  );
}
