export interface User {
  screenName: string;
  name: string;
  userLevel: number;
  id: number;
  experience: number;
  balance: number;
  avatar: string;
  cryptoToken: number;
}

export interface CryptoRun {
  value: number;
}

export interface AttackCards {
  cardName: string;
  value: number;
  effect: string;
}

export interface CardsRun {
  attack: Array<AttackCards>;
  defence: Array<AttackCards>;
}

export interface UserRun {
  graphValue: number;
  scale: number;
  crypto: Array<CryptoRun>;
  cards: Array<CardsRun>;
  avatar: string;
}

export interface Run {
  users: Array<UserRun>;
}

export interface Rooms {
  name: string;
  time: string;
  id: string;
  pool: number;
}

export interface InvestmentsRun {
  activeRooms: Array<Rooms>;
}

export interface AfterRun {
  experience: number;
  price: number;
}

export interface Crypto {
  name: string;
  price: number;
}

export interface GarageCrypto {
  activeRooms: Array<Crypto>;
}
