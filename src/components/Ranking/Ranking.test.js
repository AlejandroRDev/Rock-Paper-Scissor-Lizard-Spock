import React from "react";
import { render, screen } from "@testing-library/react";
import Ranking from "./Ranking";

describe("Test for Ranking", () => {
  test("Rendering", () => {
    const playersData = [
      {
        name: "test name",
        wins: "test wins",
      },
      {
        name: "test name1",
        wins: "test wins1",
      },
      {
        name: "test name2",
        wins: "test wins2",
      },
    ];

    render(<Ranking playersData={playersData} />);
    expect(screen.getByTestId("Ranking")).toBeInTheDocument();
  });
});
