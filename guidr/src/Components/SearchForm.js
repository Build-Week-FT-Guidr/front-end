import React from "react";

const SearchForm = props => {
  return (
    <section className="search-form">
      <form>
        <input
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
      </form>
    </section>
  );
};

export default SearchForm;
