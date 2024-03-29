import React, { useState } from "react";

import axios from "axios";
const Form = () => {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: name,
      description: description,
    };
    try {
      let result = await axios({
        url: `http://localhost:5000/task/`,
        method: "POST",
        data: data,
      });

      console.log(result);
    } catch (error) {
      console.error("Axios Error:", error.message);
    }
  };

  return (
    <div className=" p-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto border border-gray-200 border-2  rounded p-10"
      >
        <h1 className=" text-center text-xl pb-5">Task</h1>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-md font-medium pb-3 text-gray-600"
          >
            Name:
          </label>
          <input
            id="name"
            type="text"
            placeholder="Task Name ..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-md pb-3 font-medium  text-gray-600"
          >
            Details:
          </label>
          <input
            id="description"
            type="text"
            placeholder="Describe your text .."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-5">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Add task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
