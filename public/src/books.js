
//This function returns the author object that has the matching input author ID.

function findAuthorById(authors, id) {
  let authorFound = authors.find((author) => author.id === id);
  return authorFound;
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//This function returns the book object that has the matching input book ID.

function findBookById(books, id) {
  let bookFound = books.find((book) => book.id === id);
  return bookFound;
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//This function returns an array with two arrays inside of it; the first array contains book objects that are currently checked out, the second array contains book objects that have been returned

function partitionBooksByBorrowedStatus(books) {

//initialize book return status arrays (available = returned) & (unavailable = not returned)
//initialize return array that will be used to combine return status arrays
  let available = [];
  let unavailable = [];
  let booksByBorrowStatus = [];
  
//for each book, check the status of the returned variable  
  books.forEach((book) => {
//initialize borrowArray so we can check the return status of the book    
    let borrowArray = book.borrows
//if book has NOT been returned, push to unavailable array
    if (borrowArray.find((borrow) => borrow.returned === false)){
      unavailable.push(book);
    }
//else, if book has been returned, push to availalbe array   
    else {available.push(book)}
  });
//push return status arrays to booksByBorrowStatus array
  booksByBorrowStatus.push(unavailable);
  booksByBorrowStatus.push(available);
  
  return booksByBorrowStatus;
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//This function returns the first 10 accounts that have borrowed the input book

function getBorrowersForBook(book, accounts) {
  
//initialize result array that final objects will be pushed to  
  let result = [];
  let borrowArray = book.borrows;

//for each borrows index of book.borrows array, find matching accounts; modify account object to include return status
  borrowArray.forEach((borrow) => {
    
//use find method to find account matching borrow.id    
    let matchingAccount = accounts.find((account) => account.id === borrow.id);
//initialize accountObject and set to matchingAccount so we can modify object    
    let accountObject = matchingAccount;
//add the returned status of current borrower (borrow.returned)    
    accountObject['returned'] = borrow.returned;
//push accountObject to result array
    result.push(accountObject);
  })
//use splice method to return only the first 10 indexes  
  return result.splice(0,10);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
