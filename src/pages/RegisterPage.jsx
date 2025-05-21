import PageBox from "../components/common/PageBox";
import AuthBox from "../components/common/AuthBox";
import RegisterForm from "../components/auth/RegisterForm";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/common/PrimaryButton";
import Tooltip from "@mui/material/Tooltip";
import RedirectInfo from "../components/common/RedirectInfo";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../utils/Validators";
import { useMutation } from "@tanstack/react-query";
import { register } from "../services/auth";
import { saveUserDetails } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/alertSlice";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      validateEmail(email) &&
      validatePassword(password) &&
      validateUsername(username)
    );
  }, [username, email, password]);

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      dispatch(saveUserDetails(data.userDetails));
      navigate("/dashboard");
    },
    onError: (error) => {
      dispatch(setAlert({
        open: true,
        message: error.message,
        severity: "error",
        vertical: "top",
        horizontal: "center",
      }));
    },
  });

  const handleRegister = () => {
    registerMutation.mutate({ username, email, password });
  };

  const handleRedirectToLogin = () => {
    navigate("/login");
  };

  return (
    <PageBox>
      <AuthBox title="Create an account">
        <RegisterForm
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <Tooltip title={!isFormValid ? "Invalid email or password" : "Login"}>
          <div style={{ marginTop: "30px", marginBottom: "30px" }}>
            <PrimaryButton
              label="Register"
              onClick={handleRegister}
              disabled={!isFormValid}
            />
          </div>
        </Tooltip>
        <RedirectInfo
          text="Already have an account?"
          redirectText="Login"
          redirectHandler={handleRedirectToLogin}
        />
      </AuthBox>
    </PageBox>
  );
};

export default RegisterPage;
