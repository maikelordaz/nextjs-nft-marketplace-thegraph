/* 
Esta es una pagina de ejemplo para ver como se hace un graph query
* voy a usar https://www.npmjs.com/package/@apollo/client
* Necesito: 
* yarn add @apollo/client
* yarn add graphql
*/
import { useQuery, gql } from "@apollo/client"

/*
* Para crear un nuevo query escribo 
* const GET_ACTIVE_ITEMS = gql`
{
    Aqui pongo todas mis cosas de graphql. Lo puedo tomar directamente del dashboard en 
    Playground la columna mas a la izquierda. En este caso modificare esa columna en el dashboard
    y luego lo tomo
}`
*/
const GET_ACTIVE_ITEMS = gql`
    {
        activeItems(first: 5, where: { buyer: "0x0000000000000000000000000000000000000000" }) {
            id
            buyer
            seller
            nftAddress
            tokenId
            price
        }
    }
`
export default function GraphExample() {
    const { loading, error, data } = useQuery(GET_ACTIVE_ITEMS)
    console.log(data)
    return <div>hi</div>
}
