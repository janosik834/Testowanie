export const files = (state = [], action) => { // (1)
  switch (action.type) { // (2)
    case 'FETCH_FILES_SUCCESS':
      return  action.files

    default:
      return state
  }
}


export const filesSearch = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_FILES':
      return action.text;
    default:
      return state
  }
}
