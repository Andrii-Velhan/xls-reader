import React, { Component } from 'react';
import DragAndDrop from '../components/DragAndDrop';
import RenderTable from '../components/RenderTable';
import * as XLSX from "xlsx";

class FileList extends Component {
  state = {
    files: [
      // 'nice.pdf',
      // 'verycool.jpg',
      // 'amazing.png',
      // 'goodstuff.mp3',
      // 'thankyou.doc',
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
      <>
			<DragAndDrop eInput handleDrop={this.handleDrop}>
			<div style={{ minHeight: 300, width: 650 }}>
				{this.state.files.map(file => (
					<div>{file}</div>
				))}
			</div>
		</DragAndDrop>
		<RenderTable></RenderTable>
		</>
    );
  }
}
export default FileList;
