import { sanityClient } from "sanity:client";
import { projects } from "../lib/queries";


export const getProjects = async (): Promise<HomeProject[]> => {
    const data = await sanityClient.fetch(projects())

    return data
}