import { useState } from "react";
import skillsData from "../../data/skillsData.json";
import SearchableDropdown from "../SearchableDropdown/searchableDropdown";
import styled from "styled-components";

export const SkillsRow = styled.div`
  margin-bottom: 1.25rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

type Option = { value: string };

export default function SkillsSelection() {
  const [selected, setSelected] = useState<string[]>([]);
  console.log(skillsData);
  console.log(selected, setSelected);

    const handleSelect = (opt: Option) => {
      setSelected((prev) => prev.includes(opt.value) ? prev.filter((p) => p !== opt.value) : [...prev, opt.value])
    };

  return (
    <>
      <SkillsRow className="skills-header"><p>Agency Skills</p><p>What type of agency are you looking for? Select one or multiple.</p></SkillsRow>
      <div className="skills-dropdown">
        <div className="skills-dropdown__title"></div>
        <SearchableDropdown options={[]} selectedValues={[]} placeholder="Search" onSelect={handleSelect}/>
      </div>
      <SkillsRow className="skills-selected"><p aria-label="Selected skills">Selected</p><p>{selected}</p></SkillsRow>
      <SkillsRow className="skills-suggested"><p aria-label="Suggested skills">Suggested</p></SkillsRow>
    </>
  );
}
