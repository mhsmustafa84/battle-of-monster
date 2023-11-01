import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { Title } from '../../components/title/Title';
import { fetchMonstersData } from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.styled';
import { Monster } from '../../models/interfaces/monster.interface';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);

  const selectedMonster = useSelector(selectSelectedMonster);

  const randomComputerMonester: Monster | null = useMemo(() => {
    if (!selectedMonster) return null;
    const otherMonisters = monsters.filter(
      (monister) => monister.id !== selectedMonster.id,
    );
    const randomIndex = Math.floor(Math.random() * otherMonisters.length);
    return otherMonisters[randomIndex];
  }, [selectedMonster, monsters]);

  useEffect(() => {
    dispatch(fetchMonstersData());
  }, [dispatch]);

  const handleStartBattleClick = () => {
    // Fight!
  };

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />

      <BattleSection>
        <MonsterBattleCard
          monster={selectedMonster}
          title={selectedMonster?.name ?? 'Player'}
        />
        <StartBattleButton
          data-testid="start-battle-button"
          disabled={selectedMonster === null}
          onClick={handleStartBattleClick}>
          Start Battle
        </StartBattleButton>
        <MonsterBattleCard
          monster={randomComputerMonester}
          title={randomComputerMonester?.name ?? 'Computer'}
        />
      </BattleSection>
    </PageContainer>
  );
};

export { BattleOfMonsters };
