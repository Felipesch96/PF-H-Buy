import { useEffect, useRef } from "react";

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    let aux = 0;
    useEffect(() => {
        if (aux === 0) {
            cloudinaryRef.current = window.cloudinary;
            widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dhe5bmqn3',
            uploadPreset: 'henrybuy'
        }, function (err, res) {
            console.log(res);
            // if (!err && res && res.info) {
            //     console.log('Image successfully uploaded');
            // }
            aux = 1;
        })}
    }, [aux]);

    const handleClickAux = widgetRef.current?.open()

    return (
        <button onClick= {handleClickAux}>
            Upload your image
        </button>
    )
}

export default UploadWidget