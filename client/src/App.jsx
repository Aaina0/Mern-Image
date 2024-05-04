import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:3001/upload", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/getImage")
      .then((res) => setImage(res.data[1].image))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>

      <br />

      <img src={`http://localhost:3001/Images/` + image} alt="" />
    </>
  );
}

export default App;
