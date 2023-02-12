import { speakerReducer, initialState } from './speaker.reducer';

describe('Speaker Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = speakerReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
