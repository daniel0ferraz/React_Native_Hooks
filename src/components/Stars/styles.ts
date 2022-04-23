import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

type Props = {
  grande: boolean;
};

export const Star = styled.Image<Props>`
  ${({grande}) => css`
    width: ${grande ? '36px' : ' 12px'};
    height: ${grande ? '36px' : '12px'};
    margin-right: 2px;
  `}
`;
