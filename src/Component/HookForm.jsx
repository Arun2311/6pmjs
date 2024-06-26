import React from "react";
import { useForm } from "react-hook-form";

export default function HookForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    console.log("Data---", data);
  };

  console.log(errors);

  return (
    <div>
      <input
        placeholder="Name"
        {...register("name", { required: "Nami is required" })}
      />

      <p> {errors?.name?.message}</p>

      <input
        placeholder="Age"
        {...register("age", { required: "age is required" })}
      />

      <p> {errors?.age?.message}</p>

      <input
        placeholder="Email"
        {...register("email", { required: "email is requred" })}
      />

      <p> {errors?.email?.message}</p>

      {/* <input placeholder="dob" {...register("dob",required:"")} /> */}

      <button onClick={handleSubmit(onsubmit)}>Submit</button>
    </div>
  );
}
