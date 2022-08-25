import {useParams} from 'react-router-dom';


type Props = {}

const Detail = (props: Props) => {

  let { id } = useParams();
  console.log(id)

  return (
    <div>Detail {id}</div>
  )
}

export default Detail