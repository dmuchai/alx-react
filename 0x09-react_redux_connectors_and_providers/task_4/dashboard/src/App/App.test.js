import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App'; // ← import the named, unconnected App

describe('App Component', () => {
  let alertMock;
  let mockLogout;

  beforeEach(() => {
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    mockLogout = jest.fn();
  });

  afterEach(() => {
    alertMock.mockRestore();
  });

  it('calls logout when Ctrl + h is pressed', () => {
    const wrapper = shallow(
      <App
        isLoggedIn={true}
        displayDrawer={false}
        displayNotificationDrawer={() => {}}
        hideNotificationDrawer={() => {}}
        login={() => {}}
        logout={mockLogout}
      />
    );

    const event = new KeyboardEvent('keydown', {
      key: 'h',
      ctrlKey: true,
    });

    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(mockLogout).toHaveBeenCalled();
  });
});

