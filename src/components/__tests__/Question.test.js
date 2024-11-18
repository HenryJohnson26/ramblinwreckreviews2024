import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Question from ".././Question";

describe("Question Component", () => {
  const mockFormData = {};
  const mockSetFormData = jest.fn();

  it("renders a Question component with default props", () => {
    render(
      <MemoryRouter>
        <Question />
      </MemoryRouter>
    );

    expect(screen.getByText("1. Example Question")).toBeInTheDocument();
    expect(screen.getByText("subtext")).toBeInTheDocument();
  });

  it("renders a BubbleQuestion when type is 'bubble'", () => {
    render(
      <MemoryRouter>
        <Question formData={mockFormData} setFormData={mockSetFormData} />
      </MemoryRouter>
    );

    expect(screen.getByText("Excellent")).toBeInTheDocument();
    expect(screen.getByText("Good")).toBeInTheDocument();
    expect(screen.getByText("Average")).toBeInTheDocument();
  });

  it("renders a TextQuestion when type is 'text'", () => {
    render(
      <MemoryRouter>
        <Question
          formData={mockFormData}
          setFormData={mockSetFormData}
          questionData={{ type: "text" }}
        />
      </MemoryRouter>
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  //this test will pass when formData and setFormData are passed in as props to Question.
  // it("updates the form data when a user interacts with the form", async () => {
  //   render(
  //     <MemoryRouter>
  //       <Question formData={mockFormData} setFormData={mockSetFormData} />
  //     </MemoryRouter>
  //   );
  //   const excellentButton = screen.getByText("Excellent");
  //   expect(excellentButton).toBeInTheDocument();
  //   await fireEvent.click(excellentButton);
  //   expect(mockSetFormData).toHaveBeenCalledWith({ Excellent: 1 });
  // });
});
