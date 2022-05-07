import ObewdsTwConfigGroups from './obewds-tw-config-groups'
import { twBgPaletteConsole } from '@obewds/tw-bg-palette-console'
import { twBgPaletteDefault } from '@obewds/tw-bg-palette-default'
import { twBgPaletteMonochromatic } from '@obewds/tw-bg-palette-monochromatic'
import { twBgPalettePastel } from '@obewds/tw-bg-palette-pastel'
import { twBorderPaletteDefault } from '@obewds/tw-border-palette-default'
import { twTextPaletteDefault } from '@obewds/tw-text-palette-default'

interface ObewdsBaseColors {
    "default": string,
    error: string,
    primary: string,
    secondary: string,
    success: string,
    [key: string]: string
}

interface ObewdsBaseSizes {
    "4xs": string,
    "3xs": string,
    "2xs": string,
    "xs": string,
    "sm": string,
    "md": string,
    "lg": string,
    "xl": string,
    "2xl": string,
    "3xl": string,
    "4xl": string,
    [key: string]: string
}

interface ObewdsDefaultPalettesInterface {
    [key: string]: {
        colors: ObewdsBaseColors | {
            [key: string]: string
        },
        [key: string]: any,
    },
}

interface ObewdsDefaultSizesInterface {
    [key: string]: {
        sizes: ObewdsBaseSizes | {
            [key: string]: string
        },
        [key: string]: any,
    },
}

type DesignSystemKeys = typeof ObewdsTwConfigGroups[number]

interface ObewdsDefaultGroupInterface {
    [key: string | DesignSystemKeys]: {
        base?: string,
        palettes?: ObewdsDefaultPalettesInterface,
        sizes?: ObewdsDefaultSizesInterface,
        [key: string]: any,
    },
}

interface ObewdsTwConfigInterface {
    [key: string]: ObewdsDefaultGroupInterface | any
}

let ObewdsTwConfig: ObewdsTwConfigInterface = {
    anchor: {
        base: '',
        // palettes: {},
    },
    "bg": {
        base: '',
        "palettes": {
            ...twBgPaletteConsole,
            ...twBgPaletteDefault,
            ...twBgPaletteMonochromatic,
            ...twBgPalettePastel
        }
    },
    "border": {
        base: '',
        "palettes": {
            ...twBorderPaletteDefault,
        }
    },
    "text": {
        base: '',
        "palettes": {
            ...twTextPaletteDefault,
        }
    }
}

export default ObewdsTwConfig
