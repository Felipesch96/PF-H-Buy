import { useEffect, useRef } from "react";

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    console.log(cloudinaryRef);
    // useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dhe5bmqn3',
            uploadPresent: 'henrybuy'
        }, function (err, res) {
            if (!err && res && res.info) {
                // alert('Image successfully uploaded')
            }
        })
    // }, [])

    return <button onClick= {() => widgetRef.current.open()}>Upload your image</button>
}

export default UploadWidget