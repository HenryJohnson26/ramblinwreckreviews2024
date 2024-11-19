import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MyDropzone from ".././DropZone";
import { useDropzone } from "react-dropzone";

//not as important to test with how much work it will take to test

jest.mock("aws-amplify/storage", () => ({
  uploadData: jest.fn(() => Promise.resolve({ success: true })), // Mocked resolved value
}));

jest.mock("react-dropzone", () => ({
  useDropzone: jest.fn(),
}));

global.FileReader = jest.fn(() => ({
  readAsText: jest.fn(),
  onload: jest.fn(),
  onerror: jest.fn(),
}));

describe("MyDropzone", () => {
  it("should use dropzone hook", () => {
    const mockGetRootProps = jest.fn();
    const mockGetInputProps = jest.fn();

    useDropzone.mockReturnValue({
      getRootProps: mockGetRootProps,
      getInputProps: mockGetInputProps,
    });

    render(<MyDropzone />);

    expect(mockGetRootProps).toHaveBeenCalled();
    expect(mockGetInputProps).toHaveBeenCalled();
  });
});
