import React from 'react'
import Search from './Search'
import { shallow } from 'enzyme'
import { shallowToJson} from 'enzyme-to-json'
import preLoad from '../public/data.json'
import ShowCard from './ShowCard'

test('Search snapshot test',()=> {
	const component = shallow(<Search/>)
	const tree = shallowToJson(component)
	expect(tree).toMatchSnapshot()
})

test('should render card for reach show', () => {
	const component = shallow(<Search/>)
	expect(component.find(ShowCard).length).toEqual(preLoad.shows.length)
})

test('should render appropriate results for search',()=> {
	const component = shallow(<Search/>)
	const searchWord = 'house'
	component.find('input').simulate('change',{target:{value:searchWord}})
	const showCount = preLoad.shows.filter((show) => {
							return `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
						}).length
	expect(component.find(ShowCard).length).toEqual(showCount)
})