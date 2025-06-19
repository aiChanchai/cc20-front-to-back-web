import React from "react";
import FormInput from "../../components/form/FormInput";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import Buttons from "../../components/form/Buttons";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "../../utils/validator";
import { actionLogin, actionRegister } from "../../api/auth";

function Login() {
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { isSubmitting, errors } = formState;
  console.log(errors);
  const hdlSubmit = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // console.log(value);

    try {
      const res = await actionLogin(value);
      console.log(res);
      createAlert("success", res.data?.message);
      reset();
    } catch (error) {
      console.log(error);
      createAlert("info", error.response?.data?.message);
    }
  };
  return (
    <div className="flex w-full h-full justify-end">
      {/* Card */}
      <div className="border w-64  p-4 m-4 rounded-xl">
        <h1 className="font-bold text-center mb-4">Login</h1>

        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex gap-4 flex-col">
            <FormInput register={register} name="email" errors={errors} />
            <FormInput
              type="password"
              register={register}
              name="password"
              errors={errors}
            />
          </div>

          <div className="flex justify-center mt-4">
            <Buttons isSubmitting={isSubmitting} label="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
