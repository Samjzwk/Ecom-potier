/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { render, screen, fireEvent, within } from '@testing-library/react';
import Home from '@/pages/index';
import { CartProvider } from '@/packages/Context/cartContext';
import { mockedBooks } from '@/packages/__mocks__/mocks';

describe(`Home`, () => {
  const renderWithContext = (component: any, propsProvider: {}) => ({
    ...render(<CartProvider>{component}</CartProvider>),
  });

  it(`>>>> it renders list of books`, () => {
    const providerProps = {
      isPresent: () => false,
    };
    renderWithContext(<Home books={mockedBooks} />, providerProps);

    mockedBooks.forEach((mock) => {
      expect(screen.getByText(mock.title)).toBeInTheDocument();
    });
  });

  it(`>>>> it display 404 styled Homepage when error on try/catch`, () => {
    render(<Home books={[]} />);
    expect(
      screen.getByText(`Les livres se font la malle !`),
    ).toBeInTheDocument();
  });

  it(`>>>> it change list of books according to the search`, () => {
    const providerProps = {
      isPresent: () => false,
    };
    renderWithContext(<Home books={mockedBooks} />, providerProps);

    const searchInput = screen.getByPlaceholderText(`Rechercher un livre`);
    fireEvent.change(searchInput, { target: { value: `Cham` } });

    const list = screen.getByRole(`list`, {
      name: /livres/i,
    });

    const { getAllByRole } = within(list);
    const items = getAllByRole(`listitem`);

    expect(
      screen.getByText(`Henri Potier et la Chambre des secrets`),
    ).toBeInTheDocument();

    expect(items.length).toBe(1);
  });

  it(`>>>> it change list of books according to the search but find nothing`, () => {
    const providerProps = {
      isPresent: () => false,
    };
    renderWithContext(<Home books={mockedBooks} />, providerProps);

    const searchInput = screen.getByPlaceholderText(`Rechercher un livre`);
    fireEvent.change(searchInput, { target: { value: `azer` } });

    const list = screen.getByRole(`list`, {
      name: /livres/i,
    });

    const { getAllByRole } = within(list);
    const items = getAllByRole(`listitem`);

    expect(
      screen.getByText(`Les livres se font la malle !`),
    ).toBeInTheDocument();

    expect(items.length).toBe(1);
  });
});
