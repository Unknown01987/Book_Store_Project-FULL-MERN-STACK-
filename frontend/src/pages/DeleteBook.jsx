import React, { useState, useEffect } from 'react';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = ()=>{
    setLoading(true);
    axios
    .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened, please check the console');
        console.log(error);
      });

  }
  return (
    <div className="min-h-screen p-6">
    <div className="flex flex-col items-start mb-6">
      <BackButton />
      <h1 className="text-3xl font-bold mt-4">Delete Book</h1>
    </div>
    {loading && <Spinner />}
    <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl max-w-lg w-full p-8 mx-auto shadow-lg">
      <h3 className="text-2xl text-center font-semibold mb-4">
        Are you sure you want to delete this book?
      </h3>
      <button
        className="p-4 bg-red-600 text-white font-semibold rounded-lg w-full hover:bg-red-700 transition-all duration-300 ease-in-out disabled:bg-gray-400 cursor-pointer hover:scale-105"
        onClick={handleDeleteBook}
        disabled={loading}
      >
        {loading ? "Deleting..." : "Yes! Delete this book"}
      </button>
    </div>
  </div>
  )
}

export default DeleteBook