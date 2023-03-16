import React from "react";

import { ChakraProvider } from "@acme/ui/src";

/** This is the decorator that wraps the Storybook Canvas.
 * We wrap the Story with the ChakraProvider as we would on a
 * regular React application.
 */
export const decorators = [
  (Story) => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  ),
];
