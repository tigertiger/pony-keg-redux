import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const currentState = {
      1: {beer: 'Blind Pig',
      style: 'IPA',
      brewery: 'Russian River',
      description: 'Full-bodied, very hoppy, with citrus, pine, fruity notes, and a nice dry, bitter finish!',
      abv: '6.25',
      price: '319',
      id: 1,
      pintsLeft: 124},
    2: {beer: 'Pallet Jack',
    style: 'IPA',
    brewery: 'Barley Brown\'s',
    description: 'Multiple dry hop additions deliver an awesome hop aroma filled with citrus, tropical fruit, and a touch of pine. The light body has just enough malt complexity to balance the hops. Multi time GABF medalist.',
    abv: '7.2',
    price: '250',
    id: 2,
    pintsLeft: 124}
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null})).toEqual({});
  });

  test('Should add new keg data to mainKegList', () => {
    const {beer, style, brewery, description, abv, price, id, pintsLeft } = currentState;
    action = {
      type: 'ADD_KEG',
      beer: beer,
      style: style,
      brewery: brewery,
      description: description,
      abv: abv,
      price: price,
      id: id,
      pintsLeft: pintsLeft
    };

    expect(kegListReducer({}, action)).toEqual({
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


  });

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {beer: 'Pallet Jack',
      style: 'IPA',
      brewery: 'Barley Brown\'s',
      description: 'Multiple dry hop additions deliver an awesome hop aroma filled with citrus, tropical fruit, and a touch of pine. The light body has just enough malt complexity to balance the hops. Multi time GABF medalist.',
      abv: '7.2',
      price: '250',
      id: 2,
      pintsLeft: 124}
    });
  });

});