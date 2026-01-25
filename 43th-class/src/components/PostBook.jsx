import axios from "axios";
import React, { useState } from "react";

const PostBook = () => {
  const [bookCategory, setBookCategory] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [bookImage, setBookImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("bookCategory", bookCategory);
    formData.append("bookTitle", bookTitle);
    formData.append("bookDescription", bookDescription);
    formData.append("bookPrice", bookPrice);
    formData.append("bookImage", bookImage);

    try {
      const res = await axios.post(
        "http://localhost:4000/book/postbook",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data.data);

      if(res.status === 200){
        alert('Book Posted Successfully')
        setBookCategory('')
        setBookTitle('')
        setBookDescription('')
        setBookPrice('')
        setBookImage(null)
      }
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-3 px-10 pt-5 w-[80%] mx-auto"
      >
        <h1 className="text-xl text-blue-500 font-bold text-center">
          Post Book
        </h1>

        <input
          type="text"
          value={bookCategory}
          onChange={(e) => setBookCategory(e.target.value)}
          className="border p-2 rounded w-[60%]"
          placeholder="Book Category"
        />

        <input
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          className="border p-2 rounded w-[60%]"
          placeholder="Book Name"
        />

        <textarea
          value={bookDescription}
          onChange={(e) => setBookDescription(e.target.value)}
          className="border p-2 rounded w-[60%]"
          rows={5}
          placeholder="Description"
        />

        <input
          type="number"
          value={bookPrice}
          onChange={(e) => setBookPrice(e.target.value)}
          className="border p-2 rounded w-[60%]"
          placeholder="Price"
        />

        {/* ✅ NO value attribute on file input */}
        <input
          type="file"
          onChange={(e) => setBookImage(e.target.files[0])}
          className="border p-2 rounded w-[60%]"
          accept="image/*"
        />

        <button
          type="submit"
          className="p-2 rounded bg-blue-500 font-semibold cursor-pointer px-10 hover:scale-105 transition-all ease-in-out duration-300"
        >
          Submit
        </button>
      </form>

      {/*Image preview */}
      {bookImage && (
        <img
          src={URL.createObjectURL(bookImage)}
          alt="preview"
          className="w-40 mx-auto mt-4 rounded"
        />
      )}
    </div>
  );
};

export default PostBook;
