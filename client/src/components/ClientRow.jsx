import {FaTrash} from 'react-icons/fa'
import {DELETE_CLIENT} from './mutations/clientMutations'
import { useMutation } from '@apollo/client';
import {GET_CLIENTS} from '../queries/clientQueries'
function ClientRow({client}) {
    const [deleteClient] = useMutation(DELETE_CLIENT, {
        variables: { id: client.id },
        refetchQueries: [{ query: GET_CLIENTS }],
  })
    return (

    <tr>
    <td>{client.name}</td>
    <td>{client.email}</td>
    <td>{client.phone}</td>
    <td>
        <button className="btn btn-danger btn-sm" onClick= {deleteClient}>
        <FaTrash/>
        </button>
    </td>
    </tr>
  )
}

export default ClientRow