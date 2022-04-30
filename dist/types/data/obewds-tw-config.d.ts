interface ObewdsDefaultPalettesInterface {
    [key: string]: {
        colors: {
            [key: string]: string;
        };
        [key: string]: string | object;
    };
    default: {
        colors: {
            default: string;
            error: string;
            primary: string;
            secondary: string;
            success: string;
            [key: string]: string;
        };
        [key: string]: string | object;
    };
}
interface ObewdsTwConfigInterface {
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
}
declare let ObewdsTwConfig: ObewdsTwConfigInterface;
export default ObewdsTwConfig;
