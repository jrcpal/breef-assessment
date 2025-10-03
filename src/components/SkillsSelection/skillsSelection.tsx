import { useState } from "react";
import skillsData from "../../data/skillsData.json";
import SearchableDropdown from "../SearchableDropdown/searchableDropdown";

export default function SkillsSelectionProps() {
  const [selected, setSelected] = useState<string[]>([]);
  console.log(skillsData);
  console.log(selected, setSelected);

  //   const handleSelect = () => {

  //   };

  return (
    <div>
      <div className="skills-header"></div>
      <div className="skills-dropdown">
        <div className="skills-dropdown__title"></div>
        <SearchableDropdown options={[]} selectedValues={[]} />
      </div>
      <div className="skills-selected"></div>
      <div className="skills-suggested"></div>
    </div>
  );
}
