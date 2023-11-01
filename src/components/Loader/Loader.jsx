import { PropagateLoader } from 'react-spinners';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <PropagateLoader color="#ff0000" />
    </LoaderWrapper>
  );
};

export default Loader;