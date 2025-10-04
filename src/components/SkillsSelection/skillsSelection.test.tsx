import { render, screen, fireEvent } from "@testing-library/react";
import OnboardPanel from "../OnboardPanel/onboardPanel";

test("clicking a suggested chip moves it to Selected and removes it from Suggested", () => {
  render(<OnboardPanel />);

  // the test assumes skillsData contains "Digital Marketing"
  const addButton = screen.getByRole("button", {
    name: /Add Digital Marketing/i,
  });
  expect(addButton).toBeInTheDocument();

  // click the suggested chip
  fireEvent.click(addButton);

  // suggestion should no longer appear
  expect(
    screen.queryByRole("button", { name: /Add Digital Marketing/i })
  ).toBeNull();

  // selected chip remove control should appear
  const removeButton = screen.getByRole("button", {
    name: /Remove Digital Marketing/i,
  });
  expect(removeButton).toBeInTheDocument();
});
