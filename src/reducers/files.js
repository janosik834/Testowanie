export const contacts = (state = [], action) => { // (1)
  switch (action.type) { // (2)
    case 'FETCH_FILES_SUCCESS':
      return [
        ...action.files
      ]
    default:
      return state
  }
}
