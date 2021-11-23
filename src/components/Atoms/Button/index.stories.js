import Button from ".";

const ButtonStory = {
  title: "Atoms/Button",
  component: Button,
};

export default ButtonStory;

const ButtonStoryTemplate = (args) => <Button {...args} />;

export const Primary = ButtonStoryTemplate.bind({});

Primary.args = {
  color: "primary",
  label: "Primary",
  variant: "contained",
  size: "medium",
};

export const Secondary = ButtonStoryTemplate.bind({});
Secondary.args = {
  color: "secondary",
  label: "Secondary",
  variant: "contained",
  size: "medium",
};

export const Outlined = ButtonStoryTemplate.bind({});
Outlined.args = {
  color: "primary",
  label: "Outlined",
  variant: "outlined",
  size: "medium",
};

export const Text = ButtonStoryTemplate.bind({});
Text.args = {
  color: "primary",
  label: "Primary text",
  variant: "text",
  size: "medium",
};

export const SmallSize = ButtonStoryTemplate.bind({});
SmallSize.args = {
  color: "primary",
  label: "Small size",
  size: "small",
};

export const MediumSize = ButtonStoryTemplate.bind({});
MediumSize.args = {
  color: "primary",
  label: "Medium size",
  size: "medium",
};

export const LargeSize = ButtonStoryTemplate.bind({});
LargeSize.args = {
  color: "primary",
  label: "Large size",
  size: "large",
  variant: "contained",
};

export const Disabled = ButtonStoryTemplate.bind({});
Disabled.args = {
  color: "secondary",
  label: "Disabled",
  variant: "contained",
  size: "medium",
  disabled: true,
};
