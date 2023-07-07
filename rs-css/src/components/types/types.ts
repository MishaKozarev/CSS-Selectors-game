export interface LevelsStorage {
    active: string;
    passed: string;
    isHelp: string;
    help: string;
}

export type Data = {
    [key: string]: string[];
};
