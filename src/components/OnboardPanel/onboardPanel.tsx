import { useState } from "react";
import SkillsSelection from "../SkillsSelection/skillsSelection";
import {
  OnboardActions,
  OnboardActionsCta,
  OnboardCard,
  OnboardTitle,
  LoadingDots,
} from "./onboardPanel.styled";

export default function OnboardPanel() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert("Aren't we all a work in progress?");
  };

  return (
    <>
      <OnboardCard>
        <OnboardTitle>
          <h1>Project Scope</h1>
          <p>Tell us what you're looking for and when you want to start.</p>
        </OnboardTitle>

        <SkillsSelection
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
        />
      </OnboardCard>

      <OnboardActions>
        <OnboardActionsCta
          $disabled={selectedSkills.length === 0}
          $loading={isLoading}
          disabled={selectedSkills.length === 0 || isLoading}
          onClick={handleNext}
        >
          {isLoading ? (
            <LoadingDots>
              <span></span>
              <span></span>
              <span></span>
            </LoadingDots>
          ) : (
            "NEXT"
          )}
        </OnboardActionsCta>
      </OnboardActions>
    </>
  );
}
