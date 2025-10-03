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

export default function SkillsSelection() {
  const [selected, setSelected] = useState<string[]>([]);
  console.log(skillsData);
  console.log(selected, setSelected);

  //   const handleSelect = () => {

  //   };

  return (
    <>
      <SkillsRow className="skills-header"><p>Agency Skills</p><p>What type of agency are you looking for? Select one or multiple.</p></SkillsRow>
      <div className="skills-dropdown">
        <div className="skills-dropdown__title"></div>
        <SearchableDropdown options={[]} selectedValues={[]} />
      </div>
      <SkillsRow className="skills-selected"><p aria-label="Selected skills">Selected</p></SkillsRow>
      <SkillsRow className="skills-suggested"><p aria-label="Suggested skills">Suggested</p></SkillsRow>
    </>
  );
}
