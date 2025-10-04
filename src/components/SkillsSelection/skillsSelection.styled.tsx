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

export const SkillsRowText = styled.p`
  color: var(--grey600);
`;

export const SkillsCta = styled.button`
  border: 1px solid var(--primary-black);
  background-color: var(--orange500);
  margin: 50px 0px;
  padding: 6px 36px;
  border-radius: 2px;
  color: var(--grey100);
  transition: background-color 200ms ease, color 200ms ease,
    border-color 200ms ease;
  letter-spacing: 0.05em;
`;