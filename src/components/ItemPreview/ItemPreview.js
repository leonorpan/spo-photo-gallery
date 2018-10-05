import React from 'react';
import './ItemPreview.css';

class ItemPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Item-Preview" onClick={this.props.onImageClick}>
        <figure>
          <img src={this.props.Image} alt="" />
        </figure>
      </div>
    );
  }
}

export default ItemPreview;