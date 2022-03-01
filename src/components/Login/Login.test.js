import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Test for Login", () => {
  test("Rendering", () => {
      
    const playerName = 'test'

    render(<Login playerName={playerName} />);
    expect(screen.getByTestId("Login")).toBeInTheDocument();
  });
});
