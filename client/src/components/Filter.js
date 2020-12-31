function Filter(props) {
  return (
    <div key={props.id} className="filterDiv">
      <div className="results">
        <div className="input">
          <b>{props.input}</b>
        </div>
        <div className="result">{props.count} Results</div>
      </div>
      <div className="order">
        {/* Order by price{" "} */}
        <select value={props.sort} onChange={props.sortProducts}>
          <option value="price">Price</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="order">
        {/* Order by condition{" "} */}
        <select value={props.condition} onChange={props.filterProducts}>
          <option>Condition</option>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
