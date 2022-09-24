import { InputHTMLAttributes, SelectHTMLAttributes, Attributes } from 'react';
// import { Theme } from './theme.type';
import { font, theme } from "@utils/variables";

export type FontSizes = typeof font.sizes;
export type ColorTheme = typeof theme;
export type ColorThemeWeight = typeof theme.grey;
export type FontWeights = typeof font.weights;

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'text' | 'outlined';
  background?: keyof ColorTheme | Omit<string,keyof ColorTheme>;
  color?: keyof ColorTheme | Omit<string,keyof ColorTheme>;
  size?: string;
}
export type AvatarProps = {
  size?: number;
};

export type BaseFlexProps = {
  ref?: React.Ref<HTMLDivElement> | undefined | null;
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
  width?: string;
  margin?: string;
  padding?: string;
  height?: string;
  gap?: number;
  flex?: number;
  key?: Attributes['key'];
};

export type TextProps = {
  color?: keyof ColorTheme | Omit<string,keyof ColorTheme>;
  weight?: keyof FontWeights;
  size?: keyof FontSizes;
  align?: 'left' | 'center' | 'right';
  margin?: string;
  width?: string;
};

export type CardProps = {
  children: React.ReactNode;
  width?: string;
  height?: string;
  color?: string;
  boxShadow?: string;
  padding?: string;
  align?: string;
  radius?: string;
  display?: string;
  justify?: string;
  overflow?: string;
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  children?: React.ReactNode;
}

export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
  children?: React.ReactNode;
}

