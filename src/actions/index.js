export const searchFiles = (text) => ({
  type: 'SEARCH_FILES',
  text
});

export const filesFetched = (files) => ({
  type: 'FETCH_FILES_SUCCESS',
  files
});
