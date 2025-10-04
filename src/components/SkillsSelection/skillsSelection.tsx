import { useState } from "react";
import skillsData from "../../data/skillsData.json";
import SearchableDropdown from "../SearchableDropdown/searchableDropdown";
import Chip from "../Chips/chip";
import styled from "styled-components";

export const SkillsRow = styled.div`
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SkillsCta = styled.button`
  border: 1px solid var(--primary-black);
  background-color: var(--orange500);
  padding: 8px 24px;
  border-radius: 2px;
  color: var(--grey100);
  transition: background-color 200ms ease, color 200ms ease,
    border-color 200ms ease;
  letter-spacing: 0.05em;
`

type Option = { value: string };

export default function SkillsSelection() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  console.log(skillsData);

  const handleSelect = (opt: Option) => {
    setSelectedSkills((prev) =>
      prev.includes(opt.value)
        ? prev.filter((p) => p !== opt.value)
        : [...prev, opt.value]
    );
  };

  return (
    <>
      <SkillsRow className="skills-header">
        <p>Agency Skills</p>
        <p>What type of agency are you looking for? Select one or multiple.</p>
      </SkillsRow>
      <div className="skills-dropdown">
        <div className="skills-dropdown__title"></div>
        <SearchableDropdown
          options={[]}
          selectedValues={selectedSkills}
          placeholder="Search"
          onSelect={handleSelect}
        />
      </div>
      <SkillsRow className="skills-selected">
        <p aria-label="Selected skills">Selected</p>
        <div className="selected-chips">
          {selectedSkills.length === 0 ? (
            <p className="text-sm text-[var(--grey600)]">None</p>
          ) : (
            selectedSkills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                onRemove={() =>
                  setSelectedSkills((prev) => prev.filter((p) => p !== skill))
                }
              />
            ))
          )}
        </div>
      </SkillsRow>
      <SkillsRow className="skills-suggested">
        <p aria-label="Suggested skills">Suggested</p>
      </SkillsRow>
      <SkillsRow>
        <div className="flex justify-end">
          <SkillsCta className="skills-cta">NEXT</SkillsCta>
        </div>
      </SkillsRow>
    </>
  );
}
