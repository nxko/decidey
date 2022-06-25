import { css, FlattenSimpleInterpolation, ThemedCssFunction, DefaultTheme} from 'styled-components';

type Breakpoints = {
  xs: string,
  sm: string,
  md: string,
  lg: string,
  xl: string,
};
const breakpoints: Breakpoints = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '992px',
  xl: '1366px',
};

/**
 * this function simplifies media queries
 * just use it like this: {breakpoints.sm`...`}
 */

export default (Object
  .keys(breakpoints) as (keyof typeof breakpoints)[])
  .reduce<Record<keyof typeof breakpoints, (first: any, ...args: any[]) => FlattenSimpleInterpolation>>(
  (accumulator, label) => {
    accumulator[label] = (first: any, ...args: any[]) => css`
  @media (min-width: ${breakpoints[label]}) {
    ${css(first, ...args)}
  }
`;
    return accumulator;
  }, {} as { [key in keyof typeof breakpoints]: ThemedCssFunction<DefaultTheme> });
