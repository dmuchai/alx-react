import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('aphrodite', () => {
  const originalAphrodite = jest.requireActual('aphrodite');

  return {
    ...originalAphrodite,
    StyleSheet: {
      create: (styles) => styles,
    },
    css: (...args) => args.join(' '),
  };
});
