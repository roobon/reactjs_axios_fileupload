import React, { useState } from "react";
import axios from "axios";

export default function UploadForm() {
  const [info, setInfo] = useState({
    username: "",
    name: "",
  });
  const [photofinfo, setphotoInfo] = useState({
    file: "",
  });

  const changeValue = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const changePhoto = (e) => {
    setphotoInfo({ file: e.target.files[0] });
  };
  //console.log(info);
  //console.log(photofinfo);
  const submitHandle = (e) => {
    e.preventDefault();
    fileUpload();
  };

  const fileUpload = () => {
    let datas = new FormData();
    datas.append("mydata", JSON.stringify(info));
    datas.append("mydata1", photofinfo.file);

    axios
      .post(
        "http://localhost/reactjs_axios_fileupload/api/newupload.php",
        datas,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div>
      <h1>Form with Photo</h1>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={changeValue}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={changeValue}
        />
        <br />
        <input
          type="file"
          name="photo"
          placeholder="Photo"
          onChange={changePhoto}
        />
        <br />
        <input type="submit" name="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
