import { RootState } from '../../app/store';

export const selectMonsters = (state: RootState) => state.monsters.monsters;
export const selectResult = (state: RootState) => state.monsters.result;

export const selectSelectedMonster = (state: RootState) =>
  state.monsters.selectedMonster;
