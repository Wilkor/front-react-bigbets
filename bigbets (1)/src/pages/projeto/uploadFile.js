import React, { Component } from "react";
import { uniqueId } from "lodash";
import filesize from "filesize";

import api from "../../servicesAPI/authServices";

import GlobalStyle from "./styles/global";
import { Container, Content } from "./styles";

import Upload from "./components/Upload";
import FileList from "./components/FileList";
import decode from 'jwt-decode';


class UploadFile extends Component {

  constructor(props){
     super(props)
  }


  state = {
    uploadedFiles: []
  };

  async componentDidMount() {
    const response = await api.get(`post/list/${this.props.idAnexo}`);

    this.setState({
      uploadedFiles: response.data.map(file => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url
      }))
    });
  }

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }));

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    uploadedFiles.forEach(this.processUpload);
  };

  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    });
  };

  processUpload = uploadedFile => {

    if(!!localStorage.getItem('@bigbets:token')){

const token = localStorage.getItem('@bigbets:token')
let tokenDecode = decode(token)


    const data = new FormData();

    data.append("file", uploadedFile.file, uploadedFile.name);
    data.append('id_user',tokenDecode.id);
    data.append('id_projeto',this.props.idAnexo);
    data.append('status', 'Aprovado');

    api
      .post("post/file", data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));
    console.log("teste",progress)
          this.updateFile(uploadedFile.id, {
            progress
          });
        }
      })
      .then(response => {
        this.updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url
        });
      })
      .catch(() => {
        this.updateFile(uploadedFile.id, {
          error: true
        });
      });
}



  };

  handleDelete = async (evento,id) => {
    evento.preventDefault()
    evento.stopPropagation()
    await api.delete(`post/delete/${id}`);

    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id)
    });
  };

  componentWillUnmount() {
    this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
  }

  render() {

    const { uploadedFiles } = this.state;

    console.log(uploadedFiles)

    return (
      <Container>
        <Content>
          <Upload onUpload={this.handleUpload} />
          {!!uploadedFiles.length && (
            <FileList files={uploadedFiles} onDelete={this.handleDelete} />
          )}
        </Content>
        <GlobalStyle />
      </Container>
    );
  }
}

export default UploadFile;
