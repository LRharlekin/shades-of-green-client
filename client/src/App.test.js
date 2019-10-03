import React from "react";
import { MemoryRouter } from "react-router";
// import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

// importing components
import App from "./App";
import Dashboard from "./containers/Dashboard";
import LandPage from "./components/LandPage";
import Place from "./containers/Place-details";
import { exportAllDeclaration } from "@babel/types";

Enzyme.configure({ adapter: new EnzymeAdapter() });

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

test("renders without crashing", () => {
  const wrapper = shallow(<App />);
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test("valid path should not redirect to 404", () => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/", "/ welcome", "/place/:id" ]}>
        <App />
      </MemoryRouter>
    </Provider>
  );
  expect(wrapper.find(Dashboard)).toHaveLength(1);
  expect(wrapper.find(LandPage)).toHaveLength(1);
  // expect(wrapper.find(Place)).toHaveLength(1);
});
