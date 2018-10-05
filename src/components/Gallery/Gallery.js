import React from 'react';
import { connect } from 'react-redux';
import ItemPreview from '../ItemPreview/ItemPreview'
import './Gallery.css'

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }

  renderContent() {
    return (
      this.props.items.length &&
      this.props.items.map(item => {
        return <ItemPreview key={item.id} Image={item.previewURL} onImageClick={() => {}} />
      })
    );
  }

  render() {
    return <div className="Gallery">{this.renderContent()}</div>;
  }
}

const mapStateToProps = ({ items }) => {
  return {
    items,
  };
};

export default connect(
  mapStateToProps,
  null
)(Gallery);
