export interface Player {
    firstName: string;
    lastName: string;
    nickName: string;
    number: number;
    position: 'DEF' | 'MED' | 'DEL' | 'POR';
    photo?: string;
    goals?: number;
    assists?: number;
    captain?: boolean;
    redCard?: boolean;
    mvp?: boolean;
}