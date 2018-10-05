import React from 'react';
import { connect } from 'react-redux';
import ItemPreview from '../ItemPreview/ItemPreview';
import Modal from '../Modal/Modal';
import ItemDetails from '../ItemDetails/ItemDetails';
import { openModal, closeModal, addComment } from '../../store/actions';
import './Gallery.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.findCurrentItem = this.findCurrentItem.bind(this);
  }

  findCurrentItem(id) {
    return this.props.items.filter(item => item.id === id)[0];
  }

  renderModal(modalItem) {
    return (
      <Modal
        show={this.props.ui.show}
        handleClose={() => this.props.closeModal()}>
        <ItemDetails
          ImgSrc={modalItem.webformatURL}
          Tags={modalItem.tags}
          Comments={modalItem.userComments}
          onCommentSubmit={value => this.props.addComment(value, modalItem.id)}
        />
      </Modal>
    );
  }

  renderContent() {
    return (
      this.props.items &&
      this.props.items.length > 0 &&
      this.props.items.map(item => {
        return (
          <ItemPreview
            key={item.id}
            Image={item.previewURL}
            onImageClick={() => this.props.openModal(item.id)}
          />
        );
      })
    );
  }

  render() {
    const modalItem = this.props.ui.id
      ? this.findCurrentItem(this.props.ui.id)
      : null;

    return (
      <div className="Gallery">
        {modalItem && this.renderModal(modalItem)}
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
  openModal: id => dispatch(openModal(id)),
  closeModal: () => dispatch(closeModal()),
  addComment: (value, id) => dispatch(addComment(value, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
