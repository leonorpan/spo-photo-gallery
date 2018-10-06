import uiReducer from './uiReducer';

describe('UI state reducer', () => {
  it('should handle initial state', () => {
    expect(uiReducer(undefined, {})).toEqual({
      show: false,
      item: null,
    });
  });

  it('should handle OPEN_MODAL', () => {
    expect(
      uiReducer(
        { show: false, id: null },
        {
          type: 'OPEN_MODAL',
          id: 0,
        }
      )
    ).toEqual({
      show: true,
      id: 0,
    });
  });

  it('should handle CLOSE_MODAL', () => {
    expect(
      uiReducer(
        { show: false, id: null },
        {
          type: 'CLOSE_MODAL',
        }
      )
    ).toEqual({
      show: false,
      id: null,
    });
  });
});
