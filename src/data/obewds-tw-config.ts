interface ObewdsDefaultPalettesInterface {
    [key: string]: {
        colors: {
            [key: string]: string
        },
        [key: string]: string | object
    },
    default: {
        colors: {
            default: string,
            error: string,
            primary: string,
            secondary: string,
            success: string,
            [key: string]: string
        },
        [key: string]: string | object
    }
}

interface ObewdsTwConfigInterface {
    anchor: {
        //palettes: ObewdsDefaultPalettesInterface,
        [key: string]: string | object
    },
    bg: {
        palettes: ObewdsDefaultPalettesInterface,
        [key: string]: string | object
    },
    border: {
        palettes: ObewdsDefaultPalettesInterface,
        [key: string]: string | object
    },
    text: {
        palettes: ObewdsDefaultPalettesInterface,
        [key: string]: string | object
    }
}

let ObewdsTwConfig: ObewdsTwConfigInterface = {
    "anchor": {},
    "bg": {
        "palettes": {
            "console": {
                "colors": {
                    "default":"text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
                    "error":"text-pink-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
                    "primary":"text-cyan-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
                    "secondary":"text-orange-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
                    "success":"text-teal-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"
                }
            },
            "default": {
                "colors": {
                    "default":"",
                    "error":"text-white bg-pink-500 dark:bg-pink-600",
                    "primary":"text-white bg-cyan-500 dark:bg-cyan-600",
                    "secondary":"text-white bg-orange-500 dark:bg-orange-600",
                    "success":"text-white bg-teal-500 dark:bg-teal-600"
                }
            },
            "monochromatic": {
                "colors": {
                    "default":"text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",
                    "error":"text-pink-800 bg-pink-200 dark:bg-pink-800 dark:text-pink-200",
                    "primary":"text-cyan-800 bg-cyan-200 dark:bg-cyan-800 dark:text-cyan-200",
                    "secondary":"text-orange-800 bg-orange-200 dark:bg-orange-800 dark:text-orange-200",
                    "success":"text-teal-800 bg-teal-300 dark:bg-teal-800 dark:text-teal-300"
                }
            },
            "pastel": {
                "colors": {
                    "default": "",
                    "error": "bg-red-100 dark:bg-red-300",
                    "primary": "bg-cyan-100 dark:bg-cyan-300",
                    "secondary": "bg-cyan-100 dark:bg-cyan-300",
                    "success": "bg-teal-100 dark:bg-teal-300"
                }
            }
        }
    },
    "border": {
        "palettes": {
            "default": {
                "colors": {
                    "":"",
                    "default":"border-gray-200 dark:border-gray-600",
                    "error":"border-pink-600 dark:border-pink-300",
                    "primary":"border-cyan-600 dark:border-cyan-300",
                    "secondary":"border-orange-600 dark:border-orange-300",
                    "success":"border-teal-600 dark:border-teal-300"
                }
            }
        }
    },
    "text": {
        "palettes": {
            "default": {
                "colors": {
                    "default":"",
                    "error":"text-pink-500 dark:text-pink-300",
                    "primary":"text-cyan-500 dark:text-cyan-300",
                    "secondary":"text-orange-500 dark:text-orange-300",
                    "success":"text-teal-600 dark:text-teal-300"
                }
            }
        }
    }
}

export default ObewdsTwConfig
