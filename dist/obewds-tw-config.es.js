var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var twBgPaletteConsole = {
  "console": {
    colors: {
      "default": "text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
      "error": "text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
      "primary": "text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
      "secondary": "text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
      "success": "text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"
    }
  }
};
var twBgPaletteDefault = {
  "default": {
    colors: {
      "default": "",
      "error": "text-white bg-rose-500 dark:bg-rose-600",
      "primary": "text-white bg-blue-500 dark:bg-blue-600",
      "secondary": "text-white bg-violet-500 dark:bg-violet-600",
      "success": "text-white bg-green-500 dark:bg-green-600"
    }
  }
};
var twBgPaletteMonochromatic = {
  "monochromatic": {
    colors: {
      "default": "text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",
      "error": "text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",
      "primary": "text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",
      "secondary": "text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",
      "success": "text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"
    }
  }
};
var twBgPalettePastel = {
  "pastel": {
    colors: {
      "default": "text-black bg-gray-100 dark:bg-gray-200",
      "error": "text-black bg-rose-200 dark:bg-rose-300",
      "primary": "text-black bg-blue-200 dark:bg-blue-300",
      "secondary": "text-black bg-violet-200 dark:bg-violet-300",
      "success": "text-black bg-green-300 dark:bg-green-400"
    }
  }
};
var twBorderPaletteDefault = {
  "default": {
    colors: {
      "": "",
      "default": "border-gray-200 dark:border-gray-600",
      "error": "border-rose-600 dark:border-rose-300",
      "primary": "border-blue-600 dark:border-blue-300",
      "secondary": "border-violet-600 dark:border-violet-300",
      "success": "border-green-600 dark:border-green-300"
    }
  }
};
var twTextPaletteDefault = {
  "default": {
    colors: {
      "default": "",
      "error": "text-rose-500 dark:text-rose-300",
      "primary": "text-blue-500 dark:text-blue-300",
      "secondary": "text-violet-500 dark:text-violet-300",
      "success": "text-green-600 dark:text-green-300"
    }
  }
};
let ObewdsTwConfig = {
  anchor: {
    base: ""
  },
  "bg": {
    base: "",
    "palettes": __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, twBgPaletteConsole), twBgPaletteDefault), twBgPaletteMonochromatic), twBgPalettePastel)
  },
  "border": {
    base: "",
    "palettes": __spreadValues({}, twBorderPaletteDefault)
  },
  "text": {
    base: "",
    "palettes": __spreadValues({}, twTextPaletteDefault)
  }
};
const tuple = (...args) => args;
let ObewdsTwConfigGroups = tuple("anchor", "bg", "border", "button", "text");
export { ObewdsTwConfig, ObewdsTwConfigGroups };
