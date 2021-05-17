import { gql } from '@apollo/client'

const ME = gql`
  query {
    me {
      id
      username
      email
      confirmed
      avatar {
        url
        id
      }
      #      cart {
      #        products {
      #          name
      #          id
      #          price
      #          count
      #        }
      #      }
    }
    self {
      email_subscriber {
        id
        email
      }
      addresses {
        id
        address
      }
      avatar {
        url
        id
      }
      orders {
        id
        total
        products
        createdAt
        address
      }
    }
  }
`

export default ME
