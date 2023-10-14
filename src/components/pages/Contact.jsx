import React, { useState, useRef } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { DevTool } from "@hookform/devtools";
import toast, { Toaster } from "react-hot-toast";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import axios from "axios";

function Contact() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitState, setSubmitState] = useState(false);
  const formHTML = useRef();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const { handleSubmit, register, formState, control } = form;
  let { errors, isDirty, isValid } = formState;

  const handelContactSubmit = async (formData) => {
    setSubmitState(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formHTML.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSubmitState(false);

          toast.success("Message sent successfully we will contact you soon");
        },
        (error) => {
          setSubmitState(false);

          toast.error(
            "Error Ocurred while sending message please try again later or contact us directly at +91 79846 32774"
          );
        }
      );
  };

  return (
    <>
      <Typography variant="h3" textAlign={"center"}>
        Contact Us
      </Typography>
      <form
        action=""
        ref={formHTML}
        onSubmit={handleSubmit(handelContactSubmit)}
      >
        <Stack alignItems={"center"} pt={6} spacing={2}>
          <Grid container justifyContent={"center"}>
            <Grid item xs={10} sm={7} md={5} lg={5} xl={4}>
              <TextField
                {...register("name", {
                  required: {
                    value: true,
                    message: "NAME IS REQUIRED",
                  },
                })}
                error={errors.name ? true : false}
                id="name"
                name="name"
                helperText={errors.name?.message}
                type="text"
                fullWidth={true}
                label="Full Name"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Grid item xs={10} sm={7} md={5} lg={5} xl={4}>
              <TextField
                {...register("email", {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "EMAIL IS INVALID",
                  },
                  required: {
                    value: true,
                    message: "EMAIL IS REQUIRED",
                  },
                })}
                error={errors.email ? true : false}
                id="email"
                name="email"
                helperText={errors.email?.message}
                type="text"
                fullWidth={true}
                label="Email"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Grid item xs={10} sm={7} md={5} lg={5} xl={4}>
              <TextField
                {...register("phone", {
                  pattern: {
                    value:
                      /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/gi,
                    message: "PHONE NUMBER IS INVALID",
                  },
                  required: {
                    value: true,
                    message: "EMAIL IS REQUIRED",
                  },
                })}
                error={errors.phone ? true : false}
                id="phone"
                name="phone"
                helperText={errors.phone?.message}
                type="text"
                fullWidth={true}
                label="phone"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Grid item xs={10} sm={7} md={5} lg={5} xl={4}>
              <LoadingButton
                disabled={!isDirty || !isValid || submitState}
                type="submit"
                loading={submitState}
                loadingPosition="end"
                variant="contained"
                fullWidth
                sx={{ bgcolor: "secondary.main", color: "#fff" }}
              >
                submit
              </LoadingButton>
            </Grid>
          </Grid>
        </Stack>
      </form>
      <Toaster
        toastOptions={{
          success: {
            duration: 1700,
          },
          error: {
            duration: 15000,
          },
        }}
      />
    </>
  );
}

export default Contact;

// theuniformclub17@gmail.com
