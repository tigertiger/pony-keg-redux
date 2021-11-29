export default (state = {}, action) => {
  const {beer, style, brewery, description, abv, price, id, pintsLeft} = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          beer: beer,
          style: style,
          brewery: brewery,
          description: description,
          abv: abv,
          price: price,
          id: id,
          pintsLeft: pintsLeft
        }
      });
      case 'DELETE_KEG':
        let newState = { ...state };
        delete newState[id];
        return newState;


      default:
        return state;
  }
};