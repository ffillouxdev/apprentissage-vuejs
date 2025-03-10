import type { ExperienceModel } from "./experienceModel";

export interface DestinationModel {
    name: string;
    slug: string;
    image: string;
    id: number;
    description: string;
    experiences : ExperienceModel[]
}