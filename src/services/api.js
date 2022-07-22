const KEY_API = '25247412-9500f48d0650be6be45f9accb';
const URL = 'https://pixabay.com/api/';

export const searchImages = async searchElement => {
  const url = await fetch(
    `${URL}?q=${searchElement}&page=1&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
  );

  const dataSearch = await url.json();

  return dataSearch;
};
