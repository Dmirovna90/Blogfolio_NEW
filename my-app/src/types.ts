
export interface IActiveContext {
    isActive: boolean,
    SetIsActive: React.Dispatch<React.SetStateAction<boolean>>
};
export interface IthemeContext {
    theme: string;
    toggleTheme: () => void;
};
export interface IFavorite {
    id: number;
    image?: string;
    text?: string;
    date: string;
    title: string;
    index: number;
}
export interface IPost {
    id: number;
    image: string;
    date: string;
    title: string;
    text: string;
    index: number;
}