import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SpecificTask = () => {
  const [data, setData] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const getSpecificTask = async () => {
    try {
      const result = await axios({
        url: `http://localhost:5000/task/${params.id}`,
        method: `GET`,
      });
      setData(result.data.data);
    } catch (error) {
      console.error("Error fetching specific task:", error.message);
    }
  };

  useEffect(() => {
    getSpecificTask();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-6 rounded-md shadow-md">
        {data ? (
          <>
            <p className="text-gray-600 text-lg">ID: {data._id}</p>
            <p className="text-blue-500 text-2xl font-bold mb-4">
              Name: {data.name}
            </p>
            <p className="text-gray-800">Description: {data.description}</p>
            {/* Update and Delete Buttons */}
            <div className="flex mt-6 justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
                onClick={() => {
                  navigate(`/task/update/${data._id}`);
                }}
              >
                Update
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={async () => {
                  let result = await axios({
                    url: `http://localhost:5000/task/${data._id}`,
                    method: `DELETE`,
                  });
                  getSpecificTask();
                }}
              >
                Delete
              </button>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SpecificTask;
