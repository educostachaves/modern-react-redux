export function selectBook(book) {
  //SelectBook is an ActionCreator, it needs to return an action, an pobject wtho a type property
  return { 
    type: 'BOOK_SELECTED',
    payload: book
  };
}