import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../actions";

const initialState = VISIBILITY_FILTERS.ALL;

export const visibilityFilter = (state = initialState, action) => {
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
