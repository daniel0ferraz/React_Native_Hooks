import React from 'react';

import logo from '../../assets/logo.png';

import * as Styled from './styles';

export default function Header() {
  return (
    <Styled.Container>
      <Styled.Image source={logo} />
      <Styled.Title>Olá, Daniel</Styled.Title>
      <Styled.Legend>Encontre os melhores produtoreszsh</Styled.Legend>
    </Styled.Container>
  );
}
