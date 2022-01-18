import '@testing-library/jest-dom/extend-expect';
import { server } from './src/packages/test-utils/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
