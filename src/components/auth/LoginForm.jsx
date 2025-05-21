import InputField from "../common/InputField";

const LoginForm = ({email, setEmail, password, setPassword}) => {
  return (
    <>
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        setValue={setEmail}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        setValue={setPassword}
      />
    </>
  );
};

export default LoginForm;
