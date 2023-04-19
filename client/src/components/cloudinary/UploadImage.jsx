import React from "react";
import { useState } from "react";
import axios from "axios";

export default function UploadImage() {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [cloudResponse, setCloudResponse] = useState();
  const [prodImg, setProdImg] = useState();


  // product.img = prodImg

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  function uploadSingleImage(base64) {
    setLoading(true);
    axios
      .post("http://localhost:3001/cloud", { image: base64 })
      .then((res) => {
        setCloudResponse(res.data);
        setUrl(res.data.secure_url);
        setProdImg({ public_id: res.data.public_id, secure_url: res.data.secure_url })
        alert("Image uploaded Succesfully");
      })
      .then(() => setLoading(false))
      .catch(console.log);
  };

  function uploadMultipleImages(images) {
    setLoading(true);
    axios
      .post("http://localhost:3001/clouds", { images })
      .then((res) => {
        setUrl(res.data);
        alert("Image uploaded Succesfully");
      })
      .then(() => setLoading(false))
      .catch(console.log);
  };

  const uploadImage = async (event) => {
    // event.preventDefault()
    const files = event.target.files;
    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      const imagenSubida = uploadSingleImage(base64);
      return imagenSubida;
    };

    const base64s = [];
    for (var i = 0; i < files.length; i++) {
      var base = await convertBase64(files[i]);
      base64s.push(base);
    }
    uploadMultipleImages(base64s);
  };

  function UploadInput() {
    return (
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            onChange={uploadImage}
            id="dropzone-file"
            type="file"
            className="hidden"
            multiple
          />
          {/* <button onClick={uploadImage}>upload</button> */}
        </label>
      </div>
    );
  };

  return (
    <div class="flex justify-center flex-col m-8 mb-5">
      <div>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Upload Photo
        </h2>
      </div>
      <div>
        {url && (
          <div>
            Access you file at
            <a href={url} target="_blank" rel="noopener noreferrer">
              {` ${url}`}
            </a>
          </div>
        )}
      </div>
      <div>
        {loading ? (
          <div className="flex items-center justify-center">
            <p>Is loanding.........</p>
          </div>
        ) : (
          <UploadInput />
        )}
      </div>
      <div>

      </div>
    </div>
  );
};