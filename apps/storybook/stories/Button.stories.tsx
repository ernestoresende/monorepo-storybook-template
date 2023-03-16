import * as React from "react";

/**
 * These are equivalent to Meta and Story generic types, but they
 * can infer props type from the component itself.
 * See: https://storybook.js.org/blog/writing-stories-in-typescript/
 * */
import { ComponentMeta, ComponentStory } from "@storybook/react";

/** Import the component from the UI library */
import { Button } from "@acme/ui/src";

/**
 * The default export metadata controls how Storybook lists the stories
 * and provides informations used by addons.
 * See: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 */
export default {
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

/**
 * The arguments here are typesafe because of the type inference provided
 * by `ComponentStory`.
 */
Primary.args = {
  children: "Click me!",
  colorScheme: "facebook",
};
