import { gql } from "@apollo/client"

export const QUERY_GET_SINGLE_USER =gql`
query me{
  me {
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