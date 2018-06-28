export interface Course {
    id: number;
    grade: string;
    name: string;
    displayOrder: number;
    imageSrc: string;
    topics: Topic[];
}

export interface Topic {
	id: number;
	name: string;
}

