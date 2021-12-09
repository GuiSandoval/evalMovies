export interface IFilmPreviewProps {
    poster: string;
    title: string;
    type: string;
    year: string;
    imdbID: string;

};

export interface IFilmPreviewAPI {
    id: string;
    name: string;
    director?: string;
    year: number;
    cast?: string;
    gender?: string;
    evaluation: number;
    evaluationDescription: string;
    createdAt?: string;
};

