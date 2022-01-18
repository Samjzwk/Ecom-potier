import { screen, waitFor } from '@testing-library/react';
import { getPage } from 'next-page-tester';

import { mockedBooks } from '../../packages/__mocks__/mocks';
import { server, rest } from '../../packages/test-utils/server';

describe(`Homepage`, () => {
  test(`displays the list of books`, async () => {
    const { render } = await getPage({ route: `/` });

    render();

    await waitFor(() => {
      mockedBooks.forEach((book) => {
        expect(screen.getByText(book.title)).toBeInTheDocument();
      });
    });
  });

  test(`shows the 404 message when failedFetch api`, async () => {
    server.use(
      rest.get(`https://henri-potier.techx.fr/books`, async (_req, res, ctx) =>
        res(ctx.status(404)),
      ),
    );

    const { render } = await getPage({ route: `/` });

    render();

    await waitFor(() => {
      expect(
        screen.getByText(`Les livres se font la malle !`),
      ).toBeInTheDocument();
    });
  });
});
