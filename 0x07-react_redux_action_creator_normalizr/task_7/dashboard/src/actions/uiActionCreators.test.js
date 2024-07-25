import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest, LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action creator', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS actions on successful login', async () => {
    fetchMock.getOnce('/login-success.json', { body: {}, status: 200 });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_SUCCESS }
    ];

    const store = mockStore({});

    await store.dispatch(loginRequest('test@example.com', 'password123'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches LOGIN and LOGIN_FAILURE actions on failed login', async () => {
    fetchMock.getOnce('/login-success.json', { body: {}, status: 404 });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_FAILURE }
    ];

    const store = mockStore({});

    await store.dispatch(loginRequest('test@example.com', 'password123'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
