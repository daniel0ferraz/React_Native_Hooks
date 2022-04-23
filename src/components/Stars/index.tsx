import React, {useState} from 'react';

import * as Styled from './styles';
import Star from './Star';

export default function Stars({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}: any) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);

  const RenderEstrelas = () => {
    const listStars = [];
    for (let i = 0; i < 5; i++) {
      listStars.push(
        <Star
          key={i}
          onPress={() => setQuantidade(i + 1)}
          desabilitada={!editavel}
          preenchida={i < quantidade}
          grande={grande}
        />,
      );
    }
    return listStars;
  };
  return (
    <>
      <Styled.Container>
        {/* <Styled.Star grande={grande} source={estrela} />
         */}

        <RenderEstrelas />
      </Styled.Container>
    </>
  );
}
