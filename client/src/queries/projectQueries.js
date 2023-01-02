import { gql } from '@apollo/client'

const GET_PROJECT = gql`
    query getPeojects{
        projects{
            id
            name
            status
        }
    }`
export {GET_PROJECT}