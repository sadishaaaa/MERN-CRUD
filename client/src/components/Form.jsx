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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Task:</label>
        <input
          id="name"
          type="text"
          placeholder="Task Name ..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="description" className="text-red-400">
          Details:{" "}
        </label>
        <input
          id="description"
          type="text"
          placeholder="Describe your text .."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default Form;
