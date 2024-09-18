import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { MemoryRouter } from "react-router-dom";

test("renders Header component", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  // Imprime el contenido del DOM para depuración
  screen.debug();

  // Verifica si el título está presente
  const titleElement = screen.getByText(/Inicio/i);
  expect(titleElement).toBeInTheDocument();
});
