import { useParams } from 'react-router-dom';

const Detail = () => {

  let { id } = useParams();

  return (
    <div>Detail {id}</div>
  );
};

export default Detail;