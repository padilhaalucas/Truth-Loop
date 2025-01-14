import reducer, {DEFAULT_STATE, POLICY_LIST_ITEM_DETAILS_UPDATE, POLICY_LIST_ITEMS_UPDATE} from './policyList.duck'

describe('policyList reducer tests', () => {
  let state, initialState
  beforeEach(() => {
    initialState = { ...DEFAULT_STATE }
  })

  describe('POLICY_LIST_ITEMS_UPDATE tests', () => {
    describe('when passing new items', () => {
      beforeEach(() => {
        state = reducer(initialState, {type: POLICY_LIST_ITEMS_UPDATE, payload: ['a', 'b']})
      })
      it('should update items', () => {
        expect(state.items).toEqual(['a', 'b'])
      })
      it('should update itemCount', () => {
        expect(state.itemCount).toEqual(2)
      })
    })
    describe('when passing null as payload', () => {
      beforeEach(() => {
        state = reducer(initialState, {type: POLICY_LIST_ITEMS_UPDATE, payload: null})
      })
      it('should not update items', () => {
        expect(state.items).toEqual([])
      })
      it('should not update itemCount', () => {
        expect(state.itemCount).toEqual(0)
      })
    })
    describe('when passing undefined as payload', () => {
      beforeEach(() => {
        state = reducer(initialState, {type: POLICY_LIST_ITEMS_UPDATE, payload: undefined})
      })
      it('should not update items', () => {
        expect(state.items).toEqual([])
      })
      it('should not update itemCount', () => {
        expect(state.itemCount).toEqual(0)
      })
    })
  })

  describe('POLICY_LIST_ITEM_DETAILS_UPDATE tests', () => {
    describe('when passing new itemDetails', () => {
      beforeEach(() => {
        state = reducer({ ...initialState, selectedItemDetails: 'Test Details' }, {type: POLICY_LIST_ITEM_DETAILS_UPDATE, payload: 'updated details'})
      })
      it('should update selectedItemDetails', () => {
        expect(state.selectedItemDetails).toEqual('updated details')
      })
    })
    describe('when passing null as payload', () => {
      beforeEach(() => {
        state = reducer({ ...initialState, selectedItemDetails: 'Test Details' }, {type: POLICY_LIST_ITEM_DETAILS_UPDATE, payload: null})
      })
      it('should not update selectedItemDetails', () => {
        expect(state.selectedItemDetails).toEqual('Test Details')
      })
    })
    describe('when passing undefined as payload', () => {
      beforeEach(() => {
        state = reducer({ ...initialState, selectedItemDetails: 'Test Details' }, {type: POLICY_LIST_ITEM_DETAILS_UPDATE, payload: undefined})
      })
      it('should not update selectedItemDetails', () => {
        expect(state.selectedItemDetails).toEqual('Test Details')
      })
    })
  })

  describe('when no initial state exists', () => {
    beforeEach(() => {
      state = reducer(undefined, {})
    })
    it('should return the default state', () => {
      expect(state.items).toEqual([])
      expect(state.itemCount).toEqual(0)
      expect(state.selectedItemDetails).toEqual(null)
    })
  })
})