import { ThreeDots } from 'react-loader-spinner';
import { SpinerContainer, SpinerText } from './Loader.styled';

export const Spiner = () => {
  return (
    <SpinerContainer>
      <ThreeDots color="#001DCC" height={25} width={120} />
      <SpinerText>Loading...</SpinerText>
    </SpinerContainer>
  );
};
