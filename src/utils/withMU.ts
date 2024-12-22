import { nextui, NextUIPluginConfig } from "@nextui-org/react";
import {Config} from "tailwindcss"
import merge from "deepmerge"

const defaultConfig: Config = {
    darkMode: ["class", '[data-mode="dark"]'],
    content: [
        "./node_modules/@nextui-org/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@mosio/modernui/**/*.{js,ts,jsx,tsx}",
    ],
};




type ModernUiConfig = Config & {
    modernUI: NextUIPluginConfig
}
  


const withMU = (config: ModernUiConfig): Config => {
    const {modernUI, ...other} = config
    return merge(
        merge(defaultConfig, other),
        {plugins: [nextui(modernUI)]}
    )
}
export default withMU;