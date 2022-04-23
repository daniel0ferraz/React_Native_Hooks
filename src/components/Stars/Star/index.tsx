import React from 'react';

import {TouchableOpacity} from 'react-native';

import estrela from '../../../assets/estrela.png';
import estrelaCinza from '../../../assets/estrelaCinza.png';

import * as Styled from '../styles';

export default function Star({
  onPress,
  preenchida,
  desabilitada = true,
  grande = false,
}: any) {
  const getImage = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza;
  };
  return (
    <>
      <TouchableOpacity onPress={onPress} disabled={desabilitada}>
        <Styled.Star grande={grande} source={getImage()} />
      </TouchableOpacity>
    </>
  );
}
