import React from 'react';
import { connect } from 'react-redux';
import ItemPreview from '../ItemPreview/ItemPreview';
import Modal from '../Modal/Modal';
import { openModal, closeModal } from '../../store/actions';
import './Gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }

  renderContent() {
    return (
      this.props.items.length &&
      this.props.items.map(item => {
        return (
          <ItemPreview
            key={item.id}
            Image={item.previewURL}
            onImageClick={() => this.props.openModal(item)}
          />
        );
      })
    );
  }

  render() {
    return (
      <div className="Gallery">
        <Modal
          show={this.props.ui.show}
          handleClose={() => this.props.closeModal()}>
          {this.props.ui.item && <p>{this.props.ui.item.id}</p>}
        </Modal>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = ({ items, ui }) => {
  return {
    items,
    ui,
  };
};

const mapDispatchToProps = dispatch => ({
  openModal: item => dispatch(openModal(item)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
