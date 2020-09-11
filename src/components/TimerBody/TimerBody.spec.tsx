import React from 'react'
import {shallow} from 'enzyme'
import TimerBody from './TimerBody'

describe('Timer component renders', () => {

    let container = shallow(<TimerBody />)

    it('should render the div', () => {
        expect(container.find('div').length).toEqual(1)
    })

    it('should render Hours heading', () => {
        expect(container.text()).toMatch(/Hours/)
    })

    it('should render Minutes heading', () => {
        expect(container.text()).toMatch(/Minutes/)
    })

    it('should render Seconds heading', () => {
        expect(container.text()).toMatch(/Seconds/)
    })

    it('should render time', () => {
        expect(container.text()).toMatch(/0/)
    })

    it('should render Start button', () => {
        expect(container.text()).toMatch(/Start/)
    })

    it('should render Stop button', () => {
        expect(container.text()).toMatch(/Stop/)
    })

    it('should render Reset button', () => {
        expect(container.text()).toMatch(/Reset/)
    })

    it('should render Restart button', () => {
        expect(container.text()).toMatch(/Restart/)
    })
})