import type { ExperienceModel } from "./experienceModel";

export interface DestinationModel {
    id: string;
    name: string;
    slug: string;
    image: string;
    description: string;
    experiences : ExperienceModel[]
}