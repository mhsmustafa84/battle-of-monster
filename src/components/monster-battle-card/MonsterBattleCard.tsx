import { Monster } from '../../models/interfaces/monster.interface';
import { BattleMonsterProgressBar } from './BattleMonsterProgressBar';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  Image,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
  return (
    <BattleMonsterCard centralized={!monster}>
      {monster ? (
        <>
          <Image src={monster.imageUrl} />
          <BattleMonsterTitle selected={true}>
            {monster.name}
          </BattleMonsterTitle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="283"
            height="2"
            viewBox="0 0 283 2"
            fill="none">
            <path d="M0 1L283 0.999975" stroke="black" strokeOpacity="0.1" />
          </svg>
          <BattleMonsterProgressBar label="HP" value={monster.hp} />
          <BattleMonsterProgressBar label="Attack" value={monster.attack} />
          <BattleMonsterProgressBar label="Defense" value={monster.defense} />
          <BattleMonsterProgressBar label="Speed" value={monster.speed} />
        </>
      ) : (
        <BattleMonsterTitle>{title}</BattleMonsterTitle>
      )}
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
