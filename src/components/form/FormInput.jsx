import React from "react";

function FormInput({ name, register, type = "text", errors }) {
  return (
    <>
      <input
        className="border w-full rounded-md border-gray-400 p-1 px-4"
        placeholder={name}
        {...register(name)}
        type={type}
      />
      <p>
        {errors[name] && (
          <p className="text-red-500 text-sm">{errors[name].message}</p>
        )}
      </p>
    </>
  );
}

export default FormInput;
