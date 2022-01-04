import { gql } from '@apollo/client';

export const LOGIN_USER = graphql`
{
    mutation login($email: String!, $password!){
        login($email: String!, $password!)
        {
            token 
            user {
                _id
                username
            }
        }
    }
    
}
`

export const ADD_USER = graphql`
{
    mutation addUser($email: String!, $password!){
        login($email: String!, $password!)
        {
            token 
            user {
                _id
                username
            }
        }
    }
    
}
`

export const SAVE_BOOK = graphql`
{
    mutation saveBook($book: bookInput!){
        saveBook(book:$book)
        {
           _id
           username
           savedBooks {
               bookId
               authors
               description
               title
               image
               link
           }
        }
    }
    
}
`
export const REMOVE_BOOK = graphql`
{
    mutation removeBook($bookId: String!){
        removeBook(bookId: $bookId)
        {
           _id
           username
           email
           bookCount
    
           savedBooks {
               bookId
               authors
               description
               title
               image
               link
           }
        }
    }
    
}
`