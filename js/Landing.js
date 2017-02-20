import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
	render () {
		return (
			<div className='landing'>
				<h1>ACarr Video</h1>
				<input type='tex' placeholder='search' />
				<Link to='/search'> Or browse all </Link>
			</div>
		)
	}
})

export default Landing