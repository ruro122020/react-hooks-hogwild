import React from 'react'
import HogCard from './HogCard'
import FilterBtns from './FilterBtns'

const HogLists = ({hogsList}) => {
  const [filterBy, setFilterBy] = useState(['Greased', 'Sort A-Z', 'Sort Weight'])
	const [selectedFilter, setSelectFilter] = useState('')

	const sortByAlphabet = () => {
		//sort the hogs alphabetically
		const newHogs = [...hogsList]
		newHogs.sort((a, b) => {
			const firstHog = a.name
			const secondHog = b.name
			if (firstHog < secondHog) {
				return -1
			}
		})
		//return a new Array with hogs in alphabetical order
		return newHogs
	}
	const sortByWeight = () => {
		const newArray = [...hogsList]
		newArray.sort((a, b) => {
			const numOne = a.weight
			const numTwo = b.weight
			if (numOne < numTwo) {
				return -1
			}
		})
		return newArray
	}

	const formatHogs = () => {
		if (selectedFilter === '') {
			return hogsList
		}
		if (selectedFilter === 'Greased') {
			const greased = hogsList.filter(hog => hog.greased)
			return greased
		}
		if (selectedFilter === 'Sort A-Z') {
			return sortByAlphabet()
		}
		if (selectedFilter === 'Sort Weight') {
			return sortByWeight()
		}
	}
	const hogsFormatted = formatHogs()

	const displayHogs = hogsFormatted.map(hog =>
		<HogCard
			key={hog.name}
			hogObj={hog}
		/>)
	const displayFilterBtns = filterBy.map(filterName =>
		<FilterBtns
			key={filterName}
			filterName={filterName}
			setSelectFilter={setSelectFilter}
		/>)

	return (
		<div>
			{displayFilterBtns}
			{displayHogs}
		</div>
	)
}

export default HogLists
