
import { render, screen, fireEvent } from "@testing-library/react";
import SearchableDropdown from "./searchableDropdown";

test("filters options by input and calls onSelect when an option is clicked", async () => {
  const options = [
    { value: "Digital Marketing" },
    { value: "Web Design" },
    { value: "Email Marketing" },
  ];
  const onSelect = jest.fn();

  render(
    <SearchableDropdown
      options={options}
      selectedValues={[]}
      onSelect={onSelect}
      placeholder="Search"
    />
  );

  const input = screen.getByPlaceholderText("Search");
  // Type a query that should match only "Digital Marketing"
  fireEvent.change(input, { target: { value: "digi" } });

  // listbox should appear and show matching option(s)
  const listbox = await screen.findByRole("listbox");
  expect(listbox).toBeInTheDocument();

  const items = await screen.findAllByRole("option");
  expect(items.length).toBe(1);
  expect(items[0]).toHaveTextContent("Digital Marketing");

  // Clicking the option should call the onSelect callback with the option value
  fireEvent.click(items[0]);
  expect(onSelect).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith({ value: "Digital Marketing" });
});