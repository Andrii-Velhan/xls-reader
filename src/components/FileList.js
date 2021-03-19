import React, { Component } from 'react';
import FileInput from '../components/FileInput';

class FileList extends Component {
  state = {
    files: [
      'nice.pdf',
      'verycool.jpg',
      'amazing.png',
      'goodstuff.mp3',
      'thankyou.doc',
    ],
  };
  handleDrop = files => {
    let fileList = this.state.files;
    for (var i = 0; i < files.length; i++) {
      if (!files[i].name) return;
      fileList.push(files[i].name);
    }
    this.setState({ files: fileList });
  };
  render() {
    return (
      <FileInput handleDrop={this.handleDrop}>
        <div style={{ minHeight: 300, width: 650 }}>
          {this.state.files.map(file => (
            <div>{file}</div>
          ))}
        </div>
      </FileInput>
    );
  }
}
export default FileList;
