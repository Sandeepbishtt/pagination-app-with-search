import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from '../Redux/Store'
import PaginationTable from '../components/PaginationTable';
import '@testing-library/jest-dom'
import ReactDOM from 'react-dom'
test('Example', async () => {
    render( <BrowserRouter  >
        <Provider store={store} >
        <PaginationTable />
          </Provider>
          </BrowserRouter>);
    const text = await screen.findByText(/Created_at/i)
    expect(text).toBeInTheDocument()
  }) 

  describe("Home Component tests", () => {
    let container: HTMLDivElement;
    beforeEach(() => {
      container = document.createElement("div");
      document.body.appendChild(container);
      ReactDOM.render(
        <React.StrictMode>
          <BrowserRouter>
            <Provider store={store}>
              <PaginationTable />
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

    it('checking input in Component', () => {
      const inputs = container.querySelectorAll('input');
      expect(inputs).toHaveLength(1);
  })
  it('checking button in component', () => {
      const buttons = container.querySelectorAll('button');
      expect(buttons).toHaveLength(3);
  })


  });
  