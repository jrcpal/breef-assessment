//import {useState} from "react";

type Option = {
  value: string;
};

type SearchableDropdownProps = {
  //onSelect: (option: Option) => void;
  options: Option[];
  selectedValues?: string[];
};

export default function SearchableDropdown({
  //onSelect,
  options,
  selectedValues = [],
}: SearchableDropdownProps) {
  console.log(options);
  console.log(selectedValues);
  return <div></div>;
}
