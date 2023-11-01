import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';
import {
  BattleRequest,
  Result,
} from '../../models/interfaces/result.interface';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const fetchBattleResult = createAsyncThunk<Result, BattleRequest>(
  'monsters/result',
  MonsterService.startBattle,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);
