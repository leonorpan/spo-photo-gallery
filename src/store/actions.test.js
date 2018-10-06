import * as actions from './actions';

describe('gallery actions', () => {
  it('openModal should create OPEN_MODAL action', () => {
    expect(actions.openModal(0)).toEqual({
      type: 'OPEN_MODAL',
      show: true,
      id: 0,
    });
  });

  it('closeModal should create CLOSE_MODAL action', () => {
    expect(actions.closeModal()).toEqual({
      type: 'CLOSE_MODAL',
      show: false,
      id: null,
    });
  });

  it('addComment should create ADD_USER_COMMENT action', () => {
    expect(actions.addComment(0, 'An amazing comment')).toEqual({
      type: 'ADD_USER_COMMENT',
      itemId: 0,
      text: 'An amazing comment',
    });
  });
});
