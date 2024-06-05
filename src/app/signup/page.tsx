"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Create = () => {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [error , setError] = useState("");
  return (
    <div className=" max-w-[5000px] max-h-[1200px]" id="SignUp">
      <div className="flex justify-center items-center bg-[url('/image/image36.png')] w-full h-[100dvh] bg-center bg-no-repeat bg-cover ">
        <div className="bg-green-50 border-2 border-gray-400 w-[500px] h-[500px] rounded-[50px] flex flex-col justify-around items-center ">
          <p>Create</p>
          <p className=" text-center ">
            Create an account to enjoy all the services without any ads for
            free!
          </p>
          <label>
            <Input
              type="text"
              name="myRadio"
              placeholder="User Name"
              className="w-80 text-gray-400 "
            />{" "}
          </label>
          <label>
            <Input
              type="text"
              name="myRadio"
              placeholder="Email"
              className="w-80 text-gray-400 "
            />{" "}
          </label>
          <label>
            <Input
              type="text"
              name="myRadio"
              placeholder="Password"
              className="w-80 text-gray-400 "
            />{" "}
          </label>
          <Link href={"/pageEdit"}>
            <button className="bg-green-300 w-80 h-10 rounded-3xl text-white">
              Create
            </button>
          </Link>
          <span>
            Already have an Account?
            <Link href="/login" className=" underline ml-1 cursor-pointer">
              Log in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Create;
