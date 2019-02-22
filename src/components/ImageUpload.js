import React, {Component} from 'react';
import {storage} from '../firebase';
import axios from 'axios';
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      result:null,
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({image});
    }
  }
  handleUpload = async () => {
    const url = 'http://eb280c2a.ngrok.io/test-a11e1/us-central1/project_001';

      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', (snapshot) => {}, (error) => {
        console.log(error);
      }, () => {
        storage.ref('images').child(image.name).getDownloadURL().then(async downloadurl => {
           const res = await  axios.post(url, { img: downloadurl})
           console.log(res.data);
           this.setState({result:res.data});
        })
    });
    

  }
  render() {
    const {image} = this.state;
    const styleImage = {height: '300px', width: '300px'}
    return (
      <div>
      <br/>
        {image !== null && <img style={styleImage} src={URL.createObjectURL(image)} alt="no"/>}
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        {this.state.result !== null && <img src= {this.state.result}/>}
        <br/>
      </div>
    )
  }
}
export default ImageUpload;