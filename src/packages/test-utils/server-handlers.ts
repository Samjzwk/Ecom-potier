import { rest } from 'msw';
import { mockedBooks } from '../__mocks__/mocks';

const handlers = [
  rest.get(`https://henri-potier.techx.fr/books`, (_req, res, ctx) =>
    res(ctx.json(mockedBooks)),
  ),
];

export { handlers };
