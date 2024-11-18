import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MenuBar from ".././MenuBar";

test("renders MenuBar component", () => {
  render(
    <MemoryRouter>
      <MenuBar />
    </MemoryRouter>
  );

  const chevronButton = screen.getByAltText("dropdown button");
  expect(chevronButton).toBeInTheDocument();

  const menu = screen.queryByRole("menu");
  expect(menu).toBeNull();
});

test("renders chevron for MenuBar component", () => {
  render(
    <MemoryRouter>
      <MenuBar />
    </MemoryRouter>
  );

  const chevronButton = screen.getByAltText("dropdown button");
  expect(chevronButton).toBeInTheDocument();
  fireEvent.mouseEnter(chevronButton);
});

test("renders correct menu for MenuBar component based on user role", () => {
  render(
    <MemoryRouter>
      <MenuBar />
    </MemoryRouter>
  );

  const chevronButton = screen.getByAltText("dropdown button");
  expect(chevronButton).toBeInTheDocument();
  fireEvent.click(chevronButton);

  if (localStorage.getItem("AWS_signedInUserCurrentGroupStatus") === "ADMIN") {
    expect(screen.getByText(/Create Survey Questions/)).toBeInTheDocument();
    expect(screen.getByText(/Manage Faculty Access/)).toBeInTheDocument();
    expect(screen.getByText(/Edit Question Weights/)).toBeInTheDocument();
  } else if (
    localStorage.getItem("AWS_signedInUserCurrentGroupStatus") === "PROFESSOR"
  ) {
    expect(screen.getByText(/Create Course/)).toBeInTheDocument();
    expect(screen.getByText(/Manage Survey/)).toBeInTheDocument();
  } else if (
    localStorage.getItem("AWS_signedInUserCurrentGroupStatus") === "STUDENT"
  ) {
    expect(screen.getByText(/Take Survey/)).toBeInTheDocument();
    expect(screen.getByText(/View Feedback/)).toBeInTheDocument();
  }
});
