import styled from 'styled-components';
import { font, theme } from '@utils/variables';
import { TextProps } from '@types';

export const Text = styled.span<TextProps>`
  font-size: ${(props) => font.sizes[props.size ?? 'base']};
  color: #1d3153;
  font-weight: ${(props) => props.weight || font.weights.normal};
  text-align: ${(props) => props.align || 'left'};
  margin: ${(props) => props.margin || '0.5rem 0'};
`;

export const H1 = styled.h1<TextProps>`
 font-size: ${(props) => font.sizes[props.size ?? 'base'] || font.sizes.base};
  font-weight: ${font.weights.bold};
  text-align: ${(props) => props.align || 'left'};
  color: #1d3153;
  margin: ${(props) => props.margin || '0.3rem 0'};
  max-width: 100%;
`;

export const Paragraph = styled.p<TextProps>`
  font-size: ${(props) => font.sizes[props.size ?? 'base'] || font.sizes.base};
  color: #1d3153;
  font-weight: ${(props) =>
    font.weights[props.weight ?? 'normal'] || font.weights.normal};
  text-align: ${(props) => props.align || 'left'};
  margin: ${props => props.margin || '0.3rem 0'};
  max-width:${props => props.width || '100%'};
  overflow: hidden;
  white-space:no-wrap;
  text-overflow: ellipsis;
`;

export const H2 = styled.h2<TextProps>`
  font-size: ${font.sizes.xxl};
  font-weight: ${font.weights.bold};
  text-align: ${(props) => props.align || 'left'};
  color: ${(props) => props.color || theme.black[100]};
  margin: ${(props) => props.margin || '0.5rem 0'};
`;
export const H3 = styled.h3<TextProps>`
  font-size: ${font.sizes.xl};
  font-weight: ${font.weights.semibold};
  color: ${(props) => props.color || theme.black[100]};
  text-align: ${(props) => props.align || 'left'};
  margin: ${(props) => props.margin || '0.5rem 0'};
  max-width: 100%;
`;
export const H4 = styled.h4<TextProps>`
  font-size: 1.75rem;
  font-weight: ${font.weights.bold};
  color: ${(props) => props.color || theme.black[100]};
  text-align: ${(props) => props.align || 'left'};
  margin: ${(props) => props.margin || '0.5rem 0'};
  max-width: 100%;
`;
export const H5 = styled.h5<TextProps>`
  font-size: ${font.sizes.lg};
  font-weight: ${font.weights.bold};
  color: ${(props) => props.color || theme.black[100]};
  text-align: ${(props) => props.align || 'left'};
  margin: ${(props) => props.margin || '0.5rem 0'};
  max-width: 100%;
`;

export const H6 = styled.h6<TextProps>`
  font-size: 1.2rem;
  color: ${(props) => props.color || theme.black[100]};
  font-weight: ${font.weights.bold};
  margin: ${(props) => props.margin || '0.5rem 0'};
  text-align: ${(props) => props.align || 'left'};
`;
