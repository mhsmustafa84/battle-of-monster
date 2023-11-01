import {
  ProgressBar,
  ProgressBarContainer,
  ProgressBarLabel,
} from './MonsterBattleCard.styled';

const BattleMonsterProgressBar: React.FC<{ value: number; label: string }> = ({
  value,
  label,
}) => {
  return (
    <ProgressBarContainer>
      <ProgressBarLabel>{label}</ProgressBarLabel>
      <ProgressBar variant="determinate" value={value} />
    </ProgressBarContainer>
  );
};

export { BattleMonsterProgressBar };
