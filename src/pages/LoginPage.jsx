import { useState, useEffect } from "react";
import AuthBox from "../components/common/AuthBox";
import PageBox from "../components/common/PageBox";
import LoginForm from "../components/auth/LoginForm";
import PrimaryButton from "../components/common/PrimaryButton";
import RedirectInfo from "../components/common/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { validateEmail, validatePassword } from "../utils/Validators";
import { useDispatch } from "react-redux";
import { login } from "../services/auth";
import { saveUserDetails } from "../store/authSlice";
import { setAlert } from "../store/alertSlice";
import { useMutation } from "@tanstack/react-query";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (validateEmail(email) && password) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, password]);

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
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

  const handleLogin = async () => {
    loginMutation.mutate({ email, password });
  };

  const handleRedirectToRegister = () => {
    navigate("/register");
  };

  return (
    <PageBox>
      <AuthBox title="Login">
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <Tooltip title={!isFormValid ? "Invalid email or password" : "Login"}>
          <div style={{ marginTop: "30px", marginBottom: "30px" }}>
            <PrimaryButton
              label="Login"
              onClick={handleLogin}
              disabled={!isFormValid}
            />
          </div>
        </Tooltip>
        <RedirectInfo
          text="Don't have an account?"
          redirectText="Create a new account"
          additionalStyles={{ marginTop: "15px" }}
          redirectHandler={handleRedirectToRegister}
        />
      </AuthBox>
    </PageBox>
  );
};

export default LoginPage;
