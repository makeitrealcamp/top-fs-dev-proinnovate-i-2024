import { UserRepository } from "../entity/user.repository";

export const getUserByEmail = async (email: string, repository: UserRepository) => {
    return await repository.getUserByEmail(email);
}