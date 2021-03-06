import React from 'react';

const SearchBar = (props) => {


  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.checked} onChange={props.sortStocks}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={!props.checked} onChange={props.sortStocks}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.filterStocks}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
