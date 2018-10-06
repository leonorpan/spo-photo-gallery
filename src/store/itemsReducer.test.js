import itemsReducer from './itemsReducer';

describe('gallery items reducer', () => {
  it('should handle initial state', () => {
    expect(itemsReducer(undefined, {})).toEqual({
      items: [],
    });
  });

  it('should handle ADD_USER_COMMENT', () => {
    expect(
      itemsReducer(
        [
          {
            id: 0,
          },
        ],
        {
          type: 'ADD_USER_COMMENT',
          itemId: 0,
          text: 'Testing...',
        }
      )[0]
    ).toHaveProperty('userComments.0.value', 'Testing...');
  });
});
