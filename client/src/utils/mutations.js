import { gql } from "@apollo/client"

export const ADD_USER = gql`

mutation CreateUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
  }
}

`
export const LOGIN = gql`

mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}

`
export const SAVE_BOOK =gql`

mutation SaveBook($book: BookInput) {
  saveBook(book: $book) {
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`

export const REMEOVE_BOOK = gql`

mutation deleteBook($bookId: ID!) {
  deleteBook(bookID: $bookId) {
    savedBooks {
      authors
      bookId
      description
      image
      link
      title
    }
  }
}

`

