import React from "react";
import { SET_FILTER } from "../constants/actions";
import { VISIBILITY_FILTERS } from "../constants/constants";

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER": {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

const mapStateToProps = (state) => {
  return { activeFilter: state.visibilityFilter };
};

export default visibilityFilter;
