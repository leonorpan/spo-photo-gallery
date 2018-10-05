import React from 'react';
import './ItemPreview.css';

class ItemPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Item-Preview" onClick={this.props.onImageClick}>
      <div className="Item-Preview-Wrapper">
          <img src={this.props.Image} alt="" />
          </div>
      </div>
    );
  }
}

export default ItemPreview;