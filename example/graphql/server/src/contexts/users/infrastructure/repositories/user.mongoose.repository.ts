import { UserRepository } from '../../entity/user.repository';
import { Users } from '../../../../mongoose';
import { UserInput } from '../../entity/user';

export const userMongooseRepository: UserRepository = {
  createUser: async (user: UserInput) => {
    console.log({ user });
    const newUser = await Users.create(user);

    return newUser;
  },
  getUserByEmail: async (email) => {
    return await Users.findOne({ email });
  },
  getAllUsers: async () => {
    return await Users.find();
  },

  getUserWithPosts: async (email) => {
     await Users.aggregate([
        {
            $match: { email },
        },
        {
            $lookup: {
            from: 'posts',
            localField: '_id',
            foreignField: 'userId',
            as: 'posts',
            },
        },
     ])
  },
};
