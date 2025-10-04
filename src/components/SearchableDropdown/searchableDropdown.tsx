import { useEffect, useRef, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import skillsData from "../../data/skillsData.json";

type Option = {
  value: string;
};

type SearchableDropdownProps = {
  onSelect: (option: Option) => void;
  options: Option[];
  selectedValues?: string[];
  placeholder?: string;
  isLoading?: boolean;
};

export default function SearchableDropdown({
  onSelect,
  options,
  selectedValues = [],
  placeholder = "Select...",
  isLoading = false,
}: SearchableDropdownProps) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  console.log(options);
  console.log(selectedValues);

  // use provided options if any, otherwise fall back to skillsData
  const allOptions: Option[] =
    options && options.length
      ? options
      : Array.isArray(skillsData)
      ? (skillsData as string[]).map((s) => ({ value: s }))
      : [];

  const filtered = allOptions.filter((o) =>
    o.value.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelection = (value: string) => {
    // Delegate toggle to parent via onSelect; parent is the source of truth
    if (onSelect) onSelect({ value });
  };

  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!rootRef.current) return;
      if (e.target instanceof Node && !rootRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={rootRef} className="dropdown-container relative">
      <div className="dropdown-input w-full flex items-center border border-[var(--grey200)] rounded-sm bg-[var(--primary-white)] px-3 py-3 hover:border-[var(--grey200)] focus-within:border-[var(--grey200)] transition-colors">
        <Search
          size={16}
          className="lucide mr-2 flex-shrink-0"
          style={{ color: "var(--greyt40)" }}
          aria-hidden="true"
        />
        <input
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsOpen(true);
          }}
          maxLength={50}
          onClick={() => setIsOpen(!isOpen)}
          className="flex-1 min-w-0 border-0 outline-none placeholder:text-[var(--greyt40)] text-[var(--grey800)] bg-transparent text-sm"
          aria-label="Search for options"
          aria-expanded={isOpen}
          aria-controls="dropdown-list"
          aria-autocomplete="list"
        />
        <button
          type="button"
          aria-label={isOpen ? "Close dropdown" : "Open dropdown"}
          onClick={() => setIsOpen((v) => !v)}
          className="icon-button hover:text-app-accent transition-colors ml-2 p-0 bg-transparent border-0 focus:outline-none flex-shrink-0"
          style={{ color: "var(--greyt40)" }}
        >
          <ChevronDown
            size={16}
            className={`lucide transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </div>
      {isOpen && (
        <ul
          id="dropdown-list"
          role="listbox"
          aria-label="Available options"
          className="absolute left-0 w-full max-h-60 overflow-y-auto bg-[var(--grey100)] border border-[var(--grey200)] rounded-sm mt-1 z-50 list-none p-0 m-0 box-border"
        >
          {isLoading ? (
            <li
              className="px-3 py-2 text-center text-sm text-[var(--orange500)]"
              role="status"
            >
              Loading...
            </li>
          ) : filtered.length > 0 ? (
            filtered.map((o) => (
              <li
                key={o.value}
                role="option"
                className={`px-3 py-2 text-sm text-[var(--grey800)] hover:bg-[var(--grey200)] cursor-pointer ${
                  selectedValues.includes(o.value)
                    ? "font-medium bg-[var(--grey200)] text-[var(--orange500)] "
                    : ""
                }`}
                onClick={() => {
                  toggleSelection(o.value);
                }}
              >
                {o.value}
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-sm text-[var(--grey600)]">
              No results
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
