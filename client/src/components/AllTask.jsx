import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllTask = () => {
  let [task, setTask] = useState([]);
  let navigate = useNavigate();
  let getAllTask = async () => {
    try {
      let result = await axios({
        url: `http://localhost:5000/task/`,
        method: `GET`,
      });
      setTask(result.data.data);
      console.log(result);
    } catch (error) {
      console.log("'error:", error.message);
    }
  };
  useEffect(() => {
    getAllTask();
  }, []);
  return (
    <div className="container max-w-md mx-auto mt-8">
      <div className="grid grid-cols-1  gap-6">
        {Array.isArray(task) && task.length > 0 ? (
          task.map((task, i) => (
            <div key={i} className="bg-white p-4 rounded-md shadow-md">
              <p className="text-gray-600">ID: {task._id}</p>
              <p className="text-blue-500 font-bold">Name: {task.name}</p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => {
                  navigate(`/task/${task._id}`);
                }}
              >
                View
              </button>
            </div>
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default AllTask;
