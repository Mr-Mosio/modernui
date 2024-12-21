import { Meta, StoryObj } from "@storybook/react/*";
import Button from "./Button";
import "../index.css"
import {ButtonProps} from '@nextui-org/react'

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    parameters: {
      color: {
        values: [
          { name: 'primary', value: 'primary' },
        ],
      },
    },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    children: "test"
  },
  
};
