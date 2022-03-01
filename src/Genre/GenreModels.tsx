import { IGenre, ISubgenre } from "../HttpService";

export interface IGenreProps {
    activeIndex: number | undefined;
    isSubgenreStep: boolean;
    elements: IGenre[] | ISubgenre[];
    updateActiveIndex: (index: number) => void;
}