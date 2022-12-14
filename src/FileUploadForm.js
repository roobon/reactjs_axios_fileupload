import React from "react";
import axios from "axios";

class FileUploadForm extends React.Component {
  UPLOAD_ENDPOINT = "http://localhost/reactjs_axios_fileupload/api/upload.php";
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }
  async onSubmit(e) {
    e.preventDefault();
    let res = await this.uploadFile(this.state.file);
    console.log(res.data);
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  async uploadFile(file) {
    const formData = new FormData();
    formData.append("avatar", file);
    return await axios.post(this.UPLOAD_ENDPOINT, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  }

  render() {
    return (
      <div className="container" style={{ padding: 20 }}>
        <h1> ReactJS Axios and PHP Mysql File Upload - Axios Post </h1>
        <div className="row">
          <form onSubmit={this.onSubmit} className="form-inline">
            <div className="form-group">
              <label>Choose File to Upload: </label>
              <input
                type="file"
                className="form-control"
                onChange={this.onChange}
              />
            </div>{" "}
            <br />
            <button type="submit" className="btn btn-success">
              Upload File
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default FileUploadForm;
