export interface Result {
  winner: Winner;
  tie: boolean;
}

export interface Winner {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}

export interface BattleRequest {
  monster1Id?: string;
  monster2Id?: string;
}
