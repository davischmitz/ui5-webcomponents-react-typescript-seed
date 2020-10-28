import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
process.env.NODE_ENV = 'test';
process.env.BABEL_ENV = 'test';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
