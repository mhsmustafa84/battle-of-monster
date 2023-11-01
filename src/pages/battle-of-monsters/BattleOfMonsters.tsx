import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { MonsterBattleCard } from '../../components/monster-battle-card/MonsterBattleCard';
import { MonstersList } from '../../components/monsters-list/MonstersList';
import { Title } from '../../components/title/Title';
import {
  fetchBattleResult,
  fetchMonstersData,
} from '../../reducers/monsters/monsters.actions';
import {
  selectMonsters,
  selectResult,
  selectSelectedMonster,
} from '../../reducers/monsters/monsters.selectors';
import {
  BattleSection,
  PageContainer,
  StartBattleButton,
} from './BattleOfMonsters.styled';
import { Monster } from '../../models/interfaces/monster.interface';
import { WinnerDisplay } from '../../components/winner-display/WinnerDisplay';

const BattleOfMonsters = () => {
  const dispatch = useAppDispatch();

  const monsters = useSelector(selectMonsters);
  const result = useSelector(selectResult);

  const [canShowResult, setCanShowResult] = useState<boolean>(false);

  const selectedMonster = useSelector(selectSelectedMonster);

  const randomComputerMonester: Monster | null = useMemo(() => {
    setCanShowResult(false);
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

  const handleStartBattleClick = useCallback(() => {
    // Fight!
    dispatch(
      fetchBattleResult({
        monster1Id: selectedMonster?.id,
        monster2Id: randomComputerMonester?.id,
      }),
    );
    setCanShowResult(true);
  }, [dispatch, selectedMonster, randomComputerMonester]);

  const showResult =
    canShowResult && result?.winner?.name && selectedMonster?.name;

  return (
    <PageContainer>
      <Title>Battle of Monsters</Title>

      <MonstersList monsters={monsters} />

      {showResult && <WinnerDisplay text={result?.winner?.name} />}

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
