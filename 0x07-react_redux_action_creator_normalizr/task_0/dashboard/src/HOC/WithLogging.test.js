import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

// Mock console.log
global.console = {
  log: jest.fn()
};

describe('WithLogging HOC', () => {
  beforeEach(() => {
    console.log.mockClear();
  });

  it('logs Component is mounted and Component is going to unmount with pure HTML', () => {
    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = mount(<WrappedComponent />);
    
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
    
    wrapper.unmount();
    
    expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('logs Component Login is mounted and Component Login is going to unmount with Login component', () => {
    const WrappedComponent = WithLogging(Login);
    const wrapper = mount(<WrappedComponent />);
    
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    
    wrapper.unmount();
    
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
