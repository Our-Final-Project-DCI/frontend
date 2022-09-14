import React from "react";
import "./index.scss";
import Layout from "../../Layout";

import { useForm } from 'react-hook-form';

export default function Update() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
 
  
  return (
    <Layout> 
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("Title", { required: true })}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <input type="text" placeholder="Fullname" {...register("Fullname", {required: true, maxLength: 80})} />
      <input type="text" placeholder="username" {...register("username", {required: true, maxLength: 100})} />
      <input type="text" placeholder="city" {...register("city", {required: true, maxLength: 12})} />
      <textarea {...register("bio", {required: true})} />

      <input type="submit" />
    </form>
    </Layout>
  );
}