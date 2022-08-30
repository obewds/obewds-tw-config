import { twBgPaletteConsole as e } from "@obewds/tw-bg-palette-console";
import { twBgPaletteDefault as o } from "@obewds/tw-bg-palette-default";
import { twBgPaletteMonochromatic as r } from "@obewds/tw-bg-palette-monochromatic";
import { twBgPalettePastel as a } from "@obewds/tw-bg-palette-pastel";
import { twBorderPaletteDefault as l } from "@obewds/tw-border-palette-default";
import { twTextPaletteDefault as m } from "@obewds/tw-text-palette-default";
let n = {
  anchor: {
    base: ""
  },
  bg: {
    base: "",
    palettes: {
      ...e,
      ...o,
      ...r,
      ...a
    }
  },
  border: {
    base: "",
    palettes: {
      ...l
    }
  },
  text: {
    base: "",
    palettes: {
      ...m
    }
  }
};
const s = (...t) => t;
let P = s(
  "anchor",
  "bg",
  "border",
  "button",
  "text"
);
export {
  n as ObewdsTwConfig,
  P as ObewdsTwConfigGroups
};
