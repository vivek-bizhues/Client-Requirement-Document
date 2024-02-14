import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from '@mui/material/Alert';
import {
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { Google, GitHub } from "@mui/icons-material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!values.username || !values.email || !values.password) {
      <Alert severity="warning">Please fill in all required fields.</Alert>
      return;
    }
  
    console.log({
      values,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 15,
          width: 500,
          padding: 5,
          borderRadius: 5,
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <img
            src="https://images.macmerise.com/product/t-shirts/women/mcdtsrtlokilogo2.jpg"
            alt="Logo"
          />
        </Avatar>
        <Typography component="h1" variant="h4" fontWeight="bold">
          Welcome to Loki !👋🏻
        </Typography>
        <Typography component="p" variant="p" marginTop="10px">
          Please sign-in to your account and start the adventure{" "}
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            autoFocus
            fullWidth
            id="username"
            label="Username"
            margin="normal"
            value={values.username}
            onChange={handleChange("username")}
          />
          <TextField
            fullWidth
            id="email"
            label="Email"
            margin="normal"
            value={values.email}
            onChange={handleChange("email")}
          />
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="auth-login-password">Password</InputLabel>
            <OutlinedInput
              id="auth-login-password"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{
              height: "50px",
              margin: "20px 50px",
              width: "350px",
              fontWeight:"bold"
            }}
          >
            Sign Up
          </Button>
        </form>
        <Grid container>
          <Grid item >
            Already have an account ?{"   "}
            <Link href="/login" variant="body2">
              {"Sign in instead"}
            </Link>
          </Grid>
        </Grid>

        <Divider style={{ width: "100%", margin: "20px 0" }} />
        <Typography variant="body2" color="textSecondary" gutterBottom>
          OR
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<Google />}
            sx={{ mr: 2 }}
          >
            Google
          </Button>
          <Button variant="outlined" color="primary" startIcon={<GitHub />}>
            GitHub
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
