import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;

      background: string;
      iconColor: string;
      labelHover: string;
      textColor: string;
      gptMessage: string;
      shadow: string;
    };
  }
}
