export interface Player {
    name: string;
    number: number;
    position: 'DEF' | 'MED' | 'DEL' | 'POR';
    goals?: number;
    assists?: number;
    captain?: boolean;
}