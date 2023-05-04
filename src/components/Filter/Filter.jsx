import React from "react";
import './Filter.css';

const Filter = ({ value, changeFilter }) => (
        <label className="filter">
            <p className="filter__filter">Find contacts by name</p>
            <input
                type='text'
                value={value}
                onChange={changeFilter}
            />
        </label>
)

export default Filter;