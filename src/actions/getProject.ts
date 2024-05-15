import { sanityClient } from "sanity:client";
import { project } from "../lib/queries";

export const getProject = async (slug: string): Promise<Project> => {
    const data = await sanityClient.fetch(project(slug))
    return data
}