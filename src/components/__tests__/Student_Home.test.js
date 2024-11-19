import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Student_Home from "../pages/student/Student_Home";
describe("Student_Home Component", () => {
  it("renders the main title", () => {
    render(
      <MemoryRouter>
        <Student_Home />
      </MemoryRouter>
    );
    expect(screen.getByText("Your Surveys")).toBeInTheDocument();
  });

  it("renders the first survey with correct title and professor name", () => {
    render(
      <MemoryRouter>
        <Student_Home />
      </MemoryRouter>
    );
    const surveyTitle = screen.getByText("Peer Eval 1", {
      selector: ".student-home-title-center",
    });
    expect(surveyTitle).toBeInTheDocument();

    const professorName = screen.getAllByText("CSCI:200 Professor Jane Smith", {
      selector: ".student-home-professor-name",
    });
    const first = professorName[0]; //there are multiple occurences of this text
    expect(first).toBeInTheDocument();
  });

  it("navigates to '/student/take-survey' when clicking on the survey name", () => {
    delete window.location;
    window.location = { href: "" };

    render(
      <MemoryRouter>
        <Student_Home />
      </MemoryRouter>
    );
    const surveyNameElement = screen.getByText("Peer Eval 1");
    fireEvent.click(surveyNameElement);
    expect(window.location.href).toBe("/student/take-survey");
  });

  it("toggles the dropdown menu on button click", () => {
    render(
      <MemoryRouter>
        <Student_Home />
      </MemoryRouter>
    );

    const dropdownButtons = screen.getAllByRole("button", { name: "..." });
    const targetButton = dropdownButtons[0]; //there are a lot of these buttons lol

    expect(screen.queryByText("View Feedback")).not.toBeInTheDocument();

    fireEvent.click(targetButton);
    expect(screen.getByText("View Feedback")).toBeInTheDocument();

    fireEvent.click(targetButton);
    expect(screen.queryByText("View Feedback")).not.toBeInTheDocument();
  });
});
