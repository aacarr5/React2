import React from 'react'
import { Link } from 'react-router'
const {shape, string} = React.PropTypes

const ShowCard = React.createClass({
	propTypes: {
		title: string.isRequired,
		year:string.isRequired,
		description:string.isRequired,
		poster:string.isRequired,
		imdbID:string.isRequired
	},
	render() {
		const {poster, title, year, description,imdbID} = this.props
		return(
			<Link to={`/details/${imdbID}`} >
				<div className='show-card'>
					<img src={`/public/img/posters/${poster}`}/>
					<div>
						<h3>Title: {title}</h3>
						<h4>({year})</h4>
						<p> {description}</p>
					</div>
				</div>
			</Link>
		)
	}
})

export default ShowCard