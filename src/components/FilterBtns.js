import React, {useState} from 'react'

const FilterBtns = ({filterName, setSelectFilter}) => {
	const handleClick = () => {
		setSelectFilter(filterName)
	}
	return (
		<button onClick={() => handleClick(filterName)}>{filterName}</button>
	)
}

export default FilterBtns
