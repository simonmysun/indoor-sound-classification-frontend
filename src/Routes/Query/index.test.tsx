import { render, screen } from '@testing-library/react';
import Query from '.';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';

test('renders Query', () => {
  render(<BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet context={{ queryString: '' }} />}>
        <Route index element={<Query />} />
      </Route>
    </Routes>
  </BrowserRouter>);
  const linkElement = screen.getByText(/Query/i);
  expect(linkElement).toBeInTheDocument();
});
