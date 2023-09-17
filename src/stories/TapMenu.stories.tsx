import type { Meta, StoryObj } from "@storybook/react";
import TapMenu from "@/components/common/TapMenu";
import { useState } from "react";

const meta = {
  title: "Common/TapMenu",
  component: () => {
    const [state, setState] = useState(false);

    const handleChangeState = (value: boolean) => {
      setState(value);
    };

    return (
      <TapMenu
        onChange={handleChangeState}
        value={state}
        options={[
          {
            label: "첫번째",
            value: true,
          },
          { label: "두번째", value: false },
        ]}
      />
    );
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TapMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
