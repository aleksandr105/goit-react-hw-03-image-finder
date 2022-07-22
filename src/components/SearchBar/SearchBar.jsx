import {
  Header,
  FormSearch,
  ButtonForm,
  InputSearch,
} from './SearchBar.styled';
import { FcSearch } from 'react-icons/fc';
import { Formik, ErrorMessage } from 'formik';

let initialValues = {
  searchData: '',
};

export const SearchBar = ({ onSearch }) => {
  return (
    <Header>
      <Formik initialValues={initialValues} onSubmit={onSearch}>
        <FormSearch>
          <ButtonForm type="submit">
            <FcSearch style={{ width: '25px', height: '25px' }} />
          </ButtonForm>
          <InputSearch
            name="searchData"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="searchData" />
        </FormSearch>
      </Formik>
    </Header>
  );
};
