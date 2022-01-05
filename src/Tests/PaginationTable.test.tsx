import React from 'react';
import PaginationTable from '../Components/PaginationTable'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../Redux/Store'
import ReactDOM from 'react-dom'
import {mount} from 'enzyme'
describe('testing snapshot' , () => {
let container:HTMLDivElement;

beforeEach(()=>{
  container = document.createElement('div')
  document.body.appendChild(container)
  ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <PaginationTable/>
  </Provider>
</BrowserRouter>,container)
})
afterEach(()=>{
  document.body.removeChild(container)
  container.remove()
})

it('render correctly',() =>{
  expect(container).toMatchSnapshot()
})
})

test('render without crashing',() =>{
  const wrapper = mount(
    <BrowserRouter>
    <Provider store={store}>
        <PaginationTable />
      </Provider>
    </BrowserRouter>)
  const appComponent = wrapper.find("[data-test='component-pagination']")
  // console.log(wrapper.debug())
  expect(appComponent.length).toBe(1)
}) 