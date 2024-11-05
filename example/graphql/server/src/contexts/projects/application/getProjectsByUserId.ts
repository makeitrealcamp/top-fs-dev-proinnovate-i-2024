import { ProjectRepository } from "../domain/project.repository";

export const getProjectsByUserId = async (userId: string, projectRepository:ProjectRepository) => {
    try {
        return projectRepository.getProjectsByUserId(userId);
    } catch (error) {
        throw new Error(`Unable to fetch projects: ${error}`);
    }
}