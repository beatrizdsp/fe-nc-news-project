function RefineArticles({ searchParams, setSearchParams }) {
  function handleSubmit(event) {
    event.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    const sortByValue = event.currentTarget.sort_by.value;
    const orderValue = event.currentTarget.order.value;
    newParams.set("sort_by", sortByValue);
    newParams.set("order", orderValue);
    setSearchParams(newParams);
  }
  function handleRemoveFilter(){
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("sort_by");
    newParams.delete("order");
    setSearchParams(newParams);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sort_by">Sort by:</label>
        <select id="sort_by" name="sort_by" defaultValue="">
          <option key="selected" value="" disabled hidden>
            Choose here
          </option>
          <option value="created_at"> date</option>
          <option value="comment_count">no. of comments</option>
          <option value="votes">votes</option>
        </select>

        <label htmlFor="sort_by">Order</label>
        <select id="order" name="order" defaultValue="">
          <option key="selected" value="" disabled hidden>
            Choose here
          </option>
          <option value="ASC"> Ascending</option>
          <option value="DESC">Descending</option>
        </select>
        <button className="submit">Submit</button>
      </form>
      <button onClick={handleRemoveFilter}>
            Remove sort by filter
          </button>
    </div>
  );
}

export default RefineArticles;
