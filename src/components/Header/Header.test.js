import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Test for Ranking", () => {
  test("Rendering", () => {
    const playerName = 'Test'

    render(<Header playerName={playerName} />);
    expect(screen.getByTestId("Header")).toBeInTheDocument();
  });
});