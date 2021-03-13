/* eslint-disable no-case-declarations */
import { RESPONSE } from './constants';

const initialState = {
  originPlace: null,
  originIataCode: null,
  destinationPlace: null,
  destinationIataCode: null,
  quoteIds: [],
  dateFlight: [],
  carriersId: [],
  price: [],
  carriers: {},
  listLength: 0,
};

const fetchFlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESPONSE:
      const carriers = {};
      action.payload.Carriers.forEach(el => {
        carriers[el.CarrierId.toString()] = el.Name;
      });
      return {
        ...state,
        originPlace: action.payload.Places[1].CityName,
        originIataCode: action.payload.Places[1].IataCode,
        destinationPlace: action.payload.Places[0].CityName,
        destinationIataCode: action.payload.Places[0].IataCode,
        quoteIds: action.payload.Dates.OutboundDates.map(el => el.QuoteIds).flat(),
        dateFlight: action.payload.Quotes.map(el => el.OutboundLeg.DepartureDate),
        price: action.payload.Quotes.map(el => el.MinPrice),
        carriersId: action.payload.Quotes.map(el => el.OutboundLeg.CarrierIds).flat(),
        carriers,
        listLength: action.payload.Quotes.length,
      };
    default:
      return state;
  }
};

export default fetchFlightReducer;
