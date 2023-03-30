import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e1bf5b', '#f4d960', '#6acbf8', '#81a6bd', '#4986bf']}
    />
  );
};

export default Loader;
