import styled, { css } from "styled-components";
import { X, Plus } from "lucide-react";

type Variant = "selected" | "suggested";

const base = css`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Selected = styled.span`
  ${base}
  border: 1px solid var(--orange600);
  color: var(--orange600);
  background: var(--orange200);
`;

const Suggested = styled.button`
  ${base}
  border: 1px solid var(--grey600);
  color: var(--grey600);
  background: transparent;
  cursor: pointer;
  &:hover {
    background: var(--grey200);
  }
`;

const RemoveButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  color: inherit;
  cursor: pointer;
`;

type ChipProps = {
  label: string;
  variant?: Variant;
  onClick?: () => void; // for suggested
  onRemove?: () => void; // for selected
  className?: string;
};

export default function Chip({
  label,
  variant = "selected",
  onClick,
  onRemove,
  className = "",
}: ChipProps) {
  if (variant === "suggested") {
    return (
      <Suggested onClick={onClick} className={className} aria-label={`Add ${label}`}>
        <Plus size={14} />
        <span>{label}</span>
      </Suggested>
    );
  }

  return (
    <Selected className={className} role="listitem" aria-label={label}>
      <RemoveButton
        type="button"
        aria-label={`Remove ${label}`}
        onClick={onRemove}
      >
        <X size={12} aria-hidden />
      </RemoveButton>
      <span>{label}</span>
    </Selected>
  );
}