import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavCard from ".././NavCard";

test("renders NavCard component", () => {
  render(
    <MemoryRouter>
      <NavCard />
    </MemoryRouter>
  );

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("renders NavCard component with correct props", () => {
  render(
    <MemoryRouter>
      <NavCard
        route="/test"
        title="Test"
        description="Test Description"
        logo="test.png"
      />
    </MemoryRouter>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(screen.getByText("Test")).toBeInTheDocument();
  expect(screen.getByText("Test Description")).toBeInTheDocument();
});



//does not work because it doesn't update like an actual browser. not sure if there is a fix
// test("clicking NavCard component navigates to correct route", () => {
//   render(
//     <MemoryRouter>
//       <NavCard route="/test-route" />
//     </MemoryRouter>
//   );

//   const button = screen.getByRole("button");
//   fireEvent.click(button);
//   expect(window.location.pathname).toBe("/test-route");
// });
