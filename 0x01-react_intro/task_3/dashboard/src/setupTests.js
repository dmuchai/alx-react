import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { TextEncoder, TextDecoder } from 'util';

configure({ adapter: new Adapter() });

// ✅ Makes TextEncoder/TextDecoder globally available (fixes cheerio/undici issue)
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
