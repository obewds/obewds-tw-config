import { twBgPaletteConsole } from '@obewds/tw-bg-palette-console'
import { twBgPaletteDefault } from '@obewds/tw-bg-palette-default'
import { twBgPaletteMonochromatic } from '@obewds/tw-bg-palette-monochromatic'
import { twBgPalettePastel } from '@obewds/tw-bg-palette-pastel'
import { twBorderPaletteDefault } from '@obewds/tw-border-palette-default'
import { twTextPaletteDefault } from '@obewds/tw-text-palette-default'

interface ObewdsBaseColors {
    "default"?: string,
    error?: string,
    primary?: string,
    secondary?: string,
    success?: string,
    [key: string]: string | undefined
}

interface ObewdsDefaultPalettesInterface {
    [key: string]: {
        colors: { [key: string]: string } | ObewdsBaseColors,
        [key: string]: string | object,
    },
}

interface ObewdsTwConfigInterface {
    anchor?: {
        //palettes: ObewdsDefaultPalettesInterface,
        [key: string]: string | object
    },
    bg?: {
        palettes: ObewdsDefaultPalettesInterface,
        [key: string]: string | object
    },
    border?: {
        palettes: ObewdsDefaultPalettesInterface,
        [key: string]: string | object
    },
    text?: {
        palettes: ObewdsDefaultPalettesInterface,
        [key: string]: string | object
    },
    [key: string]: string | object | undefined
}

let ObewdsTwConfig: ObewdsTwConfigInterface = {
    "anchor": {},
    "bg": {
        "palettes": {
            ...twBgPaletteConsole,
            ...twBgPaletteDefault,
            ...twBgPaletteMonochromatic,
            ...twBgPalettePastel
        }
    },
    "border": {
        "palettes": {
            ...twBorderPaletteDefault,
        }
    },
    "text": {
        "palettes": {
            ...twTextPaletteDefault,
        }
    }
}

export default ObewdsTwConfig
