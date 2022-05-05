interface ObewdsBaseColors {
    "default": string;
    error: string;
    primary: string;
    secondary: string;
    success: string;
    [key: string]: string;
}
interface ObewdsDefaultPalettesInterface {
    [key: string]: {
        colors: {
            [key: string]: string;
        } | ObewdsBaseColors;
        [key: string]: string | object;
    };
}
interface ObewdsTwConfigInterface {
    anchor: {
        [key: string]: string | object;
    };
    bg: {
        palettes: ObewdsDefaultPalettesInterface;
        [key: string]: string | object;
    };
    border: {
        palettes: ObewdsDefaultPalettesInterface;
        [key: string]: string | object;
    };
    text: {
        palettes: ObewdsDefaultPalettesInterface;
        [key: string]: string | object;
    };
    [key: string]: string | object;
}
declare let ObewdsTwConfig: ObewdsTwConfigInterface;
export default ObewdsTwConfig;
