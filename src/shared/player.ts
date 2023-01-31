export interface Player {
    firstName: string;
    lastName: string;
    nickName: string;
    number: number;
    position: 'DEF' | 'MED' | 'DEL' | 'POR';
    goals?: number;
    assists?: number;
    captain?: boolean;
}