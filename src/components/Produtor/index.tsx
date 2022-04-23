import React, {useState} from 'react';

import {View} from 'react-native';
import Stars from '../Stars';

import * as Styled from './styles';

export default function Produtor({nome, imagem, distancia, estrelas}: any) {
  const [selecionado, setSelecionado] = useState(false);

  return (
    <Styled.Card
      style={{elevation: 4}}
      onPress={() => setSelecionado(!selecionado)}>
      <Styled.Image source={imagem} accessibilityLabel={nome} />
      <Styled.Info>
        <View>
          <Styled.Name>{nome}</Styled.Name>
          <Stars
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Styled.Distance>{distancia}</Styled.Distance>
      </Styled.Info>
    </Styled.Card>
  );
}
