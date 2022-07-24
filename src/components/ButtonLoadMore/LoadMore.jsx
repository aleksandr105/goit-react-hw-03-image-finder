import { LoadMoreBtn, ButtonContainer } from './LoadMore.styled';
import PropTypes from 'prop-types';
export const LoadMore = ({ onLoadMore }) => {
  return (
    <ButtonContainer>
      <LoadMoreBtn type="button" onClick={onLoadMore}>
        Load More
      </LoadMoreBtn>
    </ButtonContainer>
  );
};

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
