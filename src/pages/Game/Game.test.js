import React from "react";
import { render, screen } from "@testing-library/react";
import Game from "./Game";

describe("Test for Game", () => {
  test("Rendering", () => {
    const playerFound = {
        wins: 0
    }
    const playerName = 'test'

    render(<Game playerFound={playerFound} playerName={playerName} />);
    expect(screen.getByTestId("Game")).toBeInTheDocument();
  });
});
