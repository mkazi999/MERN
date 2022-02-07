import uiSlice from './ui-slice'

test('reducers', () => {
  let state;
  state = uiSlice(undefined, {});
  expect(state).toEqual({ui:{cartIsVisible:false},cart:{items:[],totalQuantity:0}});
})