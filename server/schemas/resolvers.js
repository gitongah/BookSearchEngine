const { User, Book } = require('../models');

const resolvers = {
  Query: {
    getSingleUser: async () => {
      return User.find({});
    },
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    

    saveBook: async (parent, { user, body }) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );
      return updatedUser;
    },
    deleteBook: async(parent, {user, params}) =>{
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $pull: { savedBooks: { bookId: params.bookId } } },
        { new: true }
      );
      return updatedUser;


    }
  },
};

module.exports = resolvers;

//find out how log in works