
const typeDefs =`
type User {
  _id: ID
  username: String
  email: String
  password: String
  bookCount: Int
  savedBooks:[Book]
}

type Book {
  bookId: ID
  authors: [String]
  description: String
  title: String
  image: String
  link: String
}
type Auth{
  token:ID!
  user:User
}


type Query {
  me: User
}
input BookInput{
  bookId: ID!
  authors: [String] 
  description: String
  title: String
  image: String
  link: String
}

type Mutation{
  login(email:String! , password:String!):Auth
  createUser(username:String!, email:String! , password:String!,): Auth
  saveBook(book: BookInput):User
  deleteBook(bookID:ID) :User
}

`
module.exports = typeDefs;