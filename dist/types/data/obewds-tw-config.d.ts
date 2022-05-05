interface ObewdsBaseColors {
    "default"?: string;
    error?: string;
    primary?: string;
    secondary?: string;
    success?: string;
    [key: string]: string | undefined;
}
interface ObewdsDefaultPalettesInterface {
    [key: string]: {
        colors: {
            [key: string]: string;
        } | ObewdsBaseColors;
        [key: string]: string | object | undefined;
    };
}
interface ObewdsTwConfigInterface {
    anchor?: {
        palettes?: ObewdsDefaultPalettesInterface;
        [key: string]: string | object | undefined;
    };
    bg?: {
        palettes?: ObewdsDefaultPalettesInterface;
        [key: string]: string | object | undefined;
    };
    border?: {
        palettes?: ObewdsDefaultPalettesInterface;
        [key: string]: string | object | undefined;
    };
    text?: {
        palettes?: ObewdsDefaultPalettesInterface;
        [key: string]: string | object | undefined;
    };
    [key: string]: string | object | undefined;
}
declare let ObewdsTwConfig: ObewdsTwConfigInterface;
export default ObewdsTwConfig;
