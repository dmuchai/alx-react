import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'enzyme-to-json';
import { TextEncoder, TextDecoder } from 'util';

configure({ adapter: new Adapter() });

