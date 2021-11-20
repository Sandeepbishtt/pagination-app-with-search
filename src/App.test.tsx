import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './Redux/Store'
import ReactDOM from 'react-dom'

import '@testing-library/jest-dom'
test('renders learn react link', () => {
  render(<React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,);
  const linkElement = screen.getByText(/Pagination with API/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Home Component tests", () => {
    let container: HTMLDivElement;
    beforeEach(() => {
      container = document.createElement("div");
      document.body.appendChild(container);
      ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
            <Provider store={store}>
              <App/>
            </Provider>
          </BrowserRouter>
        </React.StrictMode>,
        container
      );
    });
    afterEach(() => {
      document.body.removeChild(container);
      container.remove();
    });
    it("Render correctly initial document", () => {
      expect(container).toMatchSnapshot();
    });
  });