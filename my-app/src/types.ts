
export interface IActiveContext {
    isActive: boolean,
    SetIsActive: React.Dispatch<React.SetStateAction<boolean>>
};
export interface IthemeContext {
    theme: string;
    toggleTheme: () => void;
}