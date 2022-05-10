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
import { twBgPaletteConsole } from "@obewds/tw-bg-palette-console";
import { twBgPaletteDefault } from "@obewds/tw-bg-palette-default";
import { twBgPaletteMonochromatic } from "@obewds/tw-bg-palette-monochromatic";
import { twBgPalettePastel } from "@obewds/tw-bg-palette-pastel";
import { twBorderPaletteDefault } from "@obewds/tw-border-palette-default";
import { twTextPaletteDefault } from "@obewds/tw-text-palette-default";
let ObewdsTwConfig = {
  anchor: {
    base: ""
  },
  bg: {
    base: "",
    palettes: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, twBgPaletteConsole), twBgPaletteDefault), twBgPaletteMonochromatic), twBgPalettePastel)
  },
  border: {
    base: "",
    palettes: __spreadValues({}, twBorderPaletteDefault)
  },
  text: {
    base: "",
    palettes: __spreadValues({}, twTextPaletteDefault)
  }
};
const tuple = (...args) => args;
let ObewdsTwConfigGroups = tuple("anchor", "bg", "border", "button", "text");
export { ObewdsTwConfig, ObewdsTwConfigGroups };
