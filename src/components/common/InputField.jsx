import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  flexDirection: "column",
}));

const Label = styled("p")(({ theme }) => ({
  fontSize: "16px",
  textTransform: "uppercase",
  marginBottom: "5px",
  color: '#b9bbbe'
}));

const Input = styled('input')(({ theme }) => ({
  flexGrow: 1,
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#dcddde",
  backgroundColor: "#35393f",
  margin: 0,
  fontSize: "16px",
  padding: "0 10px",
}));

const InputField = ({ label, value, setValue, type, placeholder }) => {

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleValueChange}
        placeholder={placeholder}
        type={type}
      />
    </Wrapper>
  );
};

export default InputField;
