import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {
	render() {
		let utilSpace
		if(this.props.showSearch) {
			utilSpace = <input onChange={this.props.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='search?' />
		} else {
			utilSpace = (
				<h2>
					<Link to='/search'> Back </Link>
				</h2>
			)
		}
		return (
			<header>
				<h1>
					<Link to='/'>ACarr Video </Link>
				</h1>
			{ utilSpace }
			</header>
		)
	}
}

const { func, bool, string} = React.PropTypes

Header.propTypes = {
	handleSearchTermChange: func,
	showSearchTerm: bool,
	searchTerm: String
}


export default Header