import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../constants/actions";
import { VISIBILITY_FILTERS } from "../constants/constants";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div
      className="visibility-filters"
      style={{
        width: "450px",
        height: "100%",
      }}
    >
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#663300",
              marginRight: "15px",
              cursor: "pointer",
            }}
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { activeFilter: state.visibilityFilter };
};
export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
