import { sanityClient } from "sanity:client";
import { experience } from "../lib/queries";

export const getExperiences = async (): Promise<WorkExperience[]> => {
    const data = await sanityClient.fetch(experience())

    return data
}