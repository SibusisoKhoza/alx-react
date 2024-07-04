import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  let wrapper;
  let listNotifications;

  beforeEach(() => {
    listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];
    wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  });

  it('does not rerender when updating props with the same list', () => {
    const shouldComponentUpdateSpy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: listNotifications });
    expect(shouldComponentUpdateSpy).toHaveReturnedWith(false);
    shouldComponentUpdateSpy.mockRestore();
  });

  it('rerenders when updating props with a longer list', () => {
    const newNotifications = [
      ...listNotifications,
      { id: 4, type: 'default', value: 'New notification' },
    ];
    const shouldComponentUpdateSpy = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');
    wrapper.setProps({ listNotifications: newNotifications });
    expect(shouldComponentUpdateSpy).toHaveReturnedWith(true);
    shouldComponentUpdateSpy.mockRestore();
  });
});
