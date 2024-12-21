import type { Preview } from "@storybook/react";

import React from "react";
import "../src/index.css"
import {NextUIProvider} from '@nextui-org/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <NextUIProvider>
          <Story/>
        </NextUIProvider>
      );
    }
  ]
};

export default preview;
