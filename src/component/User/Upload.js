import React , { useState } from 'react';
import Dropzone from "react-dropzone-uploader";
import 'react-dropzone-uploader/dist/styles.css';
import Form from 'react-bootstrap/Form';

function Upload() {
  const [captionText, setcaptionText] = useState("");
 const [tagsText, settagsText] = useState("");
  const changeTextcap = (e) => {
    setcaptionText(e.target.value);
  }
 const changeTexttags = (e) => {
   settagsText(e.target.value);
}

  const getUploadParams = ({ file }) => {
    const body = new FormData()
    body.append('image', file)
   body.append('caption',captionText)
   body.append('tags',tagsText)
    return {
      url: 'http://localhost:3001/user/upload',
      headers: {
            authorization: sessionStorage.getItem('usertoken')
          },
      body
    };
  }

  const handleSubmit = (files, allFiles) => {
    allFiles.forEach(f => f.remove())

  }

  return (
    <div>          <div className="container my-5">
    <div className="row">
      <div className="col-md-6 mt-5 mx-auto">
                        <div className="form-group mb-3">
                    <label htmlFor="caption">caption</label>
                    <input
                      type="text"
                      className="form-control"
                      name="captionText"
                      placeholder="Enter caption"
                      value={captionText}
                      onChange={changeTextcap}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="tags">tags</label>
                    <input
                      type="text"
                      className="form-control"
                      name="tagsText"
                      placeholder="tags"
                      value={tagsText}
                      onChange={changeTexttags}
                    />
                  </div>
      <Dropzone
        getUploadParams={getUploadParams}
        onSubmit={handleSubmit}
        accept="image/*"
        maxFiles={1}
        multiple={false}
        styles={{
          dropzone: { minHeight: 200, maxHeight: 250 }
        }}
      />
     </div></div></div> 
    </div>
  );
}

export default Upload;

/*import React, { Component } from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom';

class Upload extends Component {
    constructor() {
        super()
        this.state = {
            image: '',
            caption: '',
            tags: '',
            flag:false,
          errors: {}
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
      onSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
    formData.append('image', this.state.image);
    formData.append('caption', this.state.caption);
    formData.append('tags', this.state.tags);
    const config = {
      headers: {
          'content-type': 'multipart/form-data',
           'authorization': sessionStorage.getItem('usertoken'),
      }
    }
    fetch('http://localhost:3001/user/upload', {
      method: 'POST',
      body: formData,
      headers: {
         'authorization': sessionStorage.getItem('usertoken'),
    }
    })
          .then(responce => {
            console.log(responce.data);
            return responce.data;
          }) 
          .then(res => {
            if(res === 'email already exist...') {
              this.setState({errors: res})
            }else {
              this.setState({flag:true})
            }
            console.log(res);
          })
      }
    
      render() {
        return (
            
            <div className="body">
                
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form validate action= 'http://localhost:3001/user/upload' method = "post" enctype="multipart/form-data">
                  <h1 className="h3 mb-3 font-weight-normal btn-rg">upload</h1>
                  <div className="form-group">
                    <label htmlFor="image">image</label>
                    <input
                      type="file"
                      className="form-control"
                      name="image"
                      value={this.state.image}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="caption">caption</label>
                    <input
                      type="text"
                      className="form-control"
                      name="caption"
                      placeholder="Enter caption"
                      value={this.state.caption}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tags">tags</label>
                    <input
                      type="text"
                      className="form-control"
                      name="tags"
                      placeholder="tags"
                      value={this.state.tags}
                      onChange={this.onChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    upload
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          </div>
        )
      }
}

export default Upload;*/