import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const api_key = "5fb717f928ba20cc814443cb4bbb39231b7e5731";

const Form = () => {

  const fetch_data = () => {
    axios
    .get(`https://api.census.gov/data/2019/acs/acs1?get=NAME,B01001B_001E&for=county:*&key=${api_key}&in=state:06`)
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const { register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch_data();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Census Form</h1>
        <label htmlFor="name">Name </label>
        <br />
        <input name="name" ref={register} />
        <br />
        <label htmlFor="isBusiness">Are you a business? </label>
        <input type="checkbox" name="isBusiness" ref={register} />
        <br />
        <label htmlFor="businessName">Business Name</label>
        <br />
        <input name="businessName" ref={register} />
        <br />
        <button>Submit</button>
        <br />
      </form>
    </div>
  );
};

export default Form;

{
  /* <br />
        <input name="email" ref={register({ required: true })} />
        {errors.email && <span>Email is required!</span>}
        <br />
        <label htmlFor="username">Username</label>
        <br />
        <input name="username" ref={register} />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          name="password"
          type="password"
          ref={register({ required: true })}
        />
        {errors.password && <span>Password is required!</span>}
        <br />
        <label htmlFor="address">Street Address</label>
        <br />
        <input name="address" ref={register} />
        <br />
        <label htmlFor="city">City</label>
        <br />
        <input name="city" ref={register({ required: true })} />
        {errors.city && <span>City is required!</span>}
        <br />
        <label htmlFor="zip">Zip</label>
        <br />
        <input name="zip" ref={register({ required: true })} />
        {errors.zip && <span>Zip is required!</span>}
        <br /> */
}
