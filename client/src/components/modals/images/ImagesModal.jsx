import React, { useState } from 'react';
import { useSelector } from "react-redux";
import axios from "axios";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./ImagesModal.css";

const ImagesModal = ({ onClose }) => {

  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [cloudResponse, setCloudResponse] = useState();
  const [prodImg, setProdImg] = useState();
  const [cargada, setCargada] = useState(false);
  const { userLocal } = useSelector((state) => state.user);
  console.log(userLocal);

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
        console.log(cloudResponse);
        setUrl(res.data.secure_url);
        console.log(url);
        setProdImg({ public_id: res.data.public_id, secure_url: res.data.secure_url });
        console.log(prodImg);
        setCargada(true);
        userLocal.productImages.push(prodImg);
        console.log(userLocal);
        alert("Image uploaded Succesfully");
      })
      .then(() => setLoading(false))
      .catch(console.log);
  };


  const uploadImage = async (event) => {
    // event.preventDefault()
    const files = event.target.files;
    console.log(files.length);
    console.log(files[0]);
    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      // console.log(base64);
      const imagenSubida = uploadSingleImage(base64);
      return imagenSubida;
    };
  };

  return (
    <div className="images-modal-container">
      <form onSubmit={() => uploadImage()} className="formContainerP">
        <AiOutlineCloseCircle
          onClick={() => onClose(false)}
          className="closeIconP"
        />
        <div>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Upload Image
          </h2>
        </div>
        <div>
          {url && (
            <div>
              <img src={url} alt="" />
            </div>
          )}
        </div>
        <div>
          {loading ? (
            <div className="flex items-center justify-center">
              <p>Is loanding.........</p>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
              >
                <div>
                  {
                    cargada
                      ? <p>Image uploaded</p>
                      : <div>
                        <input
                          onChange={uploadImage}
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          multiple
                        />
                        <p className="tipos-archivo">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                  }
                </div>

                {/* <button onClick={uploadImage}>upload</button> */}
              </label>
            </div>
          )}
        </div>
        <div>
        </div>
      </form>
    </div>
  );
};

export default ImagesModal;