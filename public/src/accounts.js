//This function returns the account object that has the matching input count ID.

function findAccountById(accounts, id) {

//use .find() method to loop through accounts and return account with matching id  
  let accountFound = accounts.find((account) => account.id === id);
  return accountFound;
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//This function returns an array of all accounts sorted by last name.

function sortAccountsByLastName(accounts) {
  
  let sorted = accounts.sort((accountA, accountB) =>
  accountA.name.last > accountB.name.last ? 1 : -1);
  return sorted;
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//This function returns a number that represents the number of times the account's ID appears in any book's `borrows` array.

function getTotalNumberOfBorrows(account, books) {
  
  const {id} = account;
  let total = 0;
//loop through books array  
  for (let i = 0; i < books.length; i++){
    let book = books[i];
//loop through books[i].borrow array
    for (let j = 0; j < book.borrows.length; j++){
      let borrowerID = book.borrows[j].id;
      console.log(borrowerID)
//if borrowsID === id, add 1 to total
      if (borrowerID === id){
        total += 1;
      }
    }
  }
  return total;
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/* This function returns an array of book objects, including author information, that represents all books currently checked out by the given account. 
*/  
function getBooksPossessedByAccount(account, books, authors) { 
  const {id} = account;
  let result = []; 
  
//loop through books array
  for (let i in books){
    let currentAuthorId = books[i].authorId;
    let currentBook = books[i];
//find author that matches currentAuthorId 
    let author = authors.find((authorA) => authorA.id === currentAuthorId)
//create bookObject to store currentBook and author in same object
    let bookObject = {...currentBook, author};
//       console.log(bookObject)
    
//loop through currentBook.borrows object to find matching account id  
    for (let j in currentBook.borrows){
      let borrowerID = currentBook.borrows[j].id;
      let isReturned = currentBook.borrows[j].returned;
//       console.log(borrowerID, isReturned);
      
//if borrowerID === accout id & book is still checked out, push bookObject to result
      if(borrowerID === id && isReturned === false){
          result.push(bookObject);
      }
    }
  }
  return result;
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
