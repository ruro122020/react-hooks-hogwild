import React, { useState } from 'react'

const HogCard = ({ hogObj }) => {
	const { name, image, greased, specialty, weight } = hogObj
	const [showMoreInfo, setShowMoreInfo] = useState(false)
	const [show, setShow] = useState(true)
	const handleClick = () => {
		setShowMoreInfo(!showMoreInfo)
	}
	const onShowHog = () => {
		setShow((prevState) => !prevState)
	}
	return (
		<div >
			<button onClick={onShowHog}> {show ? 'hide': 'show'}  </button>
			<div style={show ? null : { display: 'none' }} onClick={handleClick}>
				<img src={image} alt={name}></img>
				<h2>{name}</h2>
				
				{showMoreInfo &&
					<div>
						<p>Greased: {greased ? 'Yes' : 'No'}</p>
						<p>Specialty: {specialty}</p>
						<p>Weight: {weight}</p>
						<p>Highest Medal Achieved: {hogObj["hightest level achieved"]}</p>
					</div>
				}

			</div>
		</div>
	)
}

export default HogCard
