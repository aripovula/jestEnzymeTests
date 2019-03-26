import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import checkPropTypes from 'check-prop-types';
import App from './App';

Enzyme.configure( { adapter: new EnzymeAdapter() } )

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  const wrapper = shallow(<App />)
  console.log(wrapper.debug());
  expect(wrapper).toBeTruthy();
});
