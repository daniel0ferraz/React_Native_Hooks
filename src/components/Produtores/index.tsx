import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import Produtor from '../Produtor';
import {carregaProdutores} from '../../services';
import * as Styled from './styles';

type Props = {
  titulo: [] | string;
};

export default function Produtores({header: Header}) {
  const [titulo, setTitulo] = useState<Props[]>([]);
  const [lista, setLista] = useState([]);

  useEffect(() => {
    // executa uma vez quando o componente é montado
    const retorno = carregaProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
    console.log(retorno);
  }, []);

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
