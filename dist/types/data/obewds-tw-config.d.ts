import ObewdsTwConfigGroups from './obewds-tw-config-groups';
interface ObewdsBaseColors {
    "default": string;
    error: string;
    primary: string;
    secondary: string;
    success: string;
    [key: string]: string;
}
interface ObewdsBaseSizes {
    "4xs": string;
    "3xs": string;
    "2xs": string;
    "xs": string;
    "sm": string;
    "md": string;
    "lg": string;
    "xl": string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    [key: string]: string;
}
interface ObewdsDefaultPalettesInterface {
    [key: string]: {
        colors: ObewdsBaseColors | {
            [key: string]: string;
        };
        [key: string]: any;
    };
}
interface ObewdsDefaultSizesInterface {
    [key: string]: {
        sizes: ObewdsBaseSizes | {
            [key: string]: string;
        };
        [key: string]: any;
    };
}
declare type DesignSystemKeys = typeof ObewdsTwConfigGroups[number];
interface ObewdsDefaultGroupInterface {
    [key: string | DesignSystemKeys]: {
        base?: string;
        palettes?: ObewdsDefaultPalettesInterface;
        sizes?: ObewdsDefaultSizesInterface;
        [key: string]: any;
    };
}
interface ObewdsTwConfigInterface {
    [key: string]: ObewdsDefaultGroupInterface | any;
}
declare let ObewdsTwConfig: ObewdsTwConfigInterface;
export default ObewdsTwConfig;
