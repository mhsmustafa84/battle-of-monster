import { API_URL } from '../../constants/env';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleRequest,
  Result,
} from '../../models/interfaces/result.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const startBattle = async (payload: BattleRequest): Promise<Result> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json());

export const MonsterService = {
  getAll,
  startBattle,
};
