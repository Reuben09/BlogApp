import styled from 'styled-components';
import { BaseFlexProps } from '@types';

export const BaseFlex = styled.div<BaseFlexProps>`
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'unset'};
  box-sizing: border-box;
  gap: ${(props) => props.gap || '0'}rem;
  padding: ${(props) => props.padding || '0rem'};
  flex: ${(props) => props.flex || ""};
  margin: ${(props) => props.margin || '0rem'};
`;

export const Row = styled(BaseFlex)`
  flex-direction: row;
`;

export const Column = styled(BaseFlex)`
  flex-direction: column;
`;

