import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux'
import store from './Redux/Store'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {mount} from 'enzyme'




test('renders learn react link', () => {
  render(
<BrowserRouter>
<Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>
    );
  const linkElement = screen.getByText(/Pagination App/i);
  expect(linkElement).toBeInTheDocument();
});


describe('testing snapshot' , () => {
let container:HTMLDivElement;
beforeEach(()=>{
  container = document.createElement('div')
  document.body.appendChild(container)
  ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
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



test('render async calling api',async()=>{
  render(
    <BrowserRouter>
    <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
        )
        const heading = await screen.getAllByRole('heading')
        expect(heading).toHaveLength(2)
})
})


test('render without crashing',() =>{
  const wrapper = mount(
    <BrowserRouter>
    <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>)
  const appComponent = wrapper.find("[data-test='component-app']")
  // console.log(wrapper.debug())
  expect(appComponent.length).toBe(1)
}) 

