import React from 'react'

const SearchInput = ({ search, setSearch }) => {
  return (
    <input data-testid="searchinput"
      onChange={setSearch}
      type="text"
      value={search}
      placeholder="Search by Name"
    />
  )
}

export default SearchInput
