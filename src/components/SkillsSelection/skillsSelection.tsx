import skillsData from "../../data/skillsData.json";
import SearchableDropdown from "../SearchableDropdown/searchableDropdown";
import Chip from "../Chips/chip";
import { SkillsRow, SkillsRowText } from "./skillsSelection.styled";

type Option = { value: string };

interface SkillsSelectionProps {
  selectedSkills: string[];
  setSelectedSkills: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SkillsSelection({ selectedSkills, setSelectedSkills }: SkillsSelectionProps) {
  console.log(skillsData);

  const handleSelect = (opt: Option) => {
    setSelectedSkills((prev) =>
      prev.includes(opt.value)
        ? prev.filter((p) => p !== opt.value)
        : [...prev, opt.value]
    );
  };

  const getSuggestions = (): string[] => {
    try {
      const allSkills: string[] = Array.isArray(skillsData)
        ? (skillsData as unknown as string[])
        : [];

      // filter out already selected skills
      return allSkills.filter((s) => !selectedSkills.includes(s));
    } catch (err) {
      console.error("SkillsSelection: error retrieving suggestions", err);
      return [];
    }
  };

  return (
    <>
      <SkillsRow className="skills-header">
        <p className="text-lg font-[500] text-[var(--grey800)]">
          Agency Skills
        </p>
        <SkillsRowText>
          What type of agency are you looking for? Select one or multiple.
        </SkillsRowText>
        <div className="skills-dropdown">
          <div className="skills-dropdown__title"></div>
          <SearchableDropdown
            options={[]}
            selectedValues={selectedSkills}
            placeholder="Search"
            onSelect={handleSelect}
          />
        </div>
      </SkillsRow>

      <SkillsRow className="skills-selected">
        <SkillsRowText aria-label="Selected skills">Selected</SkillsRowText>
        <div className="selected-chips">
          {selectedSkills.length === 0 ? (
            <p className="text-sm text-[var(--greyt40)]">No skills selected</p>
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
        <SkillsRowText aria-label="Suggested skills">Suggested</SkillsRowText>
        <div className="suggested-chips flex flex-wrap ">
          {getSuggestions().length === 0 ? (
            <p className="text-sm text-[var(--greyt40)]">
              No remaining suggestions
            </p>
          ) : (
            getSuggestions().map((skill) => (
              <Chip
                key={skill}
                label={skill}
                variant="suggested"
                onClick={() => handleSelect({ value: skill })}
              />
            ))
          )}
        </div>
      </SkillsRow>
    </>
  );
}
