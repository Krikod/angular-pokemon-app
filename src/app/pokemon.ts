export class Pokemon {
    id: number;
    hp: number; // points de vie
    cp: number; // nbre de dégâts
    name: string;
    picture: string;
    types: Array<string>; // types du pokemon (eau, feu...)
    created: Date;
  }