import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
// import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';

import Register from './index.js';

const mockStore = configureMockStore();
const store = mockStore({ 
  Auth: { 
    token: null 
  }, 
  User: {
    isSubmitRegister: false 
  }
});

Enzyme.configure({ adapter: new Adapter() });

describe('<Register />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Register store={store}/>
    ).dive().dive();
  })

  it('Form value empty each field, should return ', () => {
    const submitButton = wrapper.find('#registerSubmit');
    console.log(wrapper.debug());
    // error ref
    // submitButton.simulate('click');


    // expect(wrapper.props('isSubmitRegister')).toBe(false);
  })

});
