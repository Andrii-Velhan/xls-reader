import React, { Component } from 'react';
// import { toast } from 'react-toastify';
// import './SearchBar.scss';
// import PropTypes from 'prop-types';

export default class DragAndDrop extends Component {
  state = {
    drag: false,
  };
  dropRef = React.createRef();
  handleDrag = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  handleDragIn = e => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ drag: true });
    }
  };
  handleDragOut = e => {
    e.preventDefault();
    e.stopPropagation();
    this.dragCounter--;
    if (this.dragCounter === 0) {
      this.setState({ drag: false });
    }
  };
  handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ drag: false });
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.handleDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
      this.dragCounter = 0;
    }
  };
  componentDidMount() {
    let div = this.dropRef.current;
    div.addEventListener('dragenter', this.handleDragIn);
    div.addEventListener('dragleave', this.handleDragOut);
    div.addEventListener('dragover', this.handleDrag);
    div.addEventListener('drop', this.handleDrop);
  }
  componentWillUnmount() {
    let div = this.dropRef.current;
    div.removeEventListener('dragenter', this.handleDragIn);
    div.removeEventListener('dragleave', this.handleDragOut);
    div.removeEventListener('dragover', this.handleDrag);
    div.removeEventListener('drop', this.handleDrop);
  }
  render() {
    return (
      <div
        style={{
          display: 'inline-block',
          position: 'relative',
          padding: '15px',
          margin: '15px',
          border: '1px dashed red',
          backgroundColor: 'rgba(220,255,255, 0.8)',
        }}
        ref={this.dropRef}
      >
        {this.state.drag && (
          <div
            style={{
              border: '4px dashed grey',
              backgroundColor: 'rgba(200,255,255, 0.8)',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: 0,
                left: 0,
                textAlign: 'center',
                color: 'grey',
                fontSize: 36,
              }}
            >
              <div>drop here :)</div>
            </div>
          </div>
        )}
        {this.props.children}
      </div>
    );
  }
}

//============= ==============

// export default class FileInput extends Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.fileInput = React.createRef();
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     alert(`Selected file - ${this.fileInput.current.files[0].name}`);
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Upload file:
//           <input type="file" ref={this.fileInput} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

//================ ===============

// export default class Searchbar extends Component {
//   state = {
//     value: '',
//   };

//   static propTypes = {
//     onSubmit: PropTypes.func,
//   };

//   static defaultProps = {};

//   handleChange = event => {
//     this.setState({ value: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const { value } = this.state;

//     if (value.trim() === '') {
//       toast('Input data !!!');
//       return;
//     }

//     this.props.onSubmit(value);
//     this.setState({ value: '' });
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <div className="Searchbar">
//         <form onSubmit={this.handleSubmit} className="SearchForm">
//           <input
//             className="SearchFormInput"
//             type="file"
//             name="query"
//             value={value}
//             onChange={this.handleChange}
//             autoComplete="off"
//             autoFocus
//           />
//           {/* <button type="submit" className="SearchFormButton">
//             Search
//           </button> */}
//         </form>
//       </div>
//     );
//   }
// }
