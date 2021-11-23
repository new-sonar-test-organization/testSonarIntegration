import Login from ".";

const LoginStory = {
  title: "Organisms/Login",
  component: Login,
};

const LoginStoryTemplate = (args) => <Login {...args} />;

export const defaultLogin = LoginStoryTemplate.bind({});
Login.args = {};

export default LoginStory;
