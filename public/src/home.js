//This function returns the total number of book objects inside the books array
 
function getTotalBooksCount(books) {
// initialize counter variable
// for each book, push value of 1 to empty counter array
  let counter = [];
  books.forEach((book) => counter.push(1));
//   console.log(counter)

// use reduce method to sum each all the elements in the counter array
  const initialValue = 0;
  const totalBookCount = counter.reduce((previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
//   console.log(totalBookCount)
  
  return totalBookCount;
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//This function returns the total number of accounts in accounts array

function getTotalAccountsCount(accounts) {
  let totalAccounts = 0;
  accounts.forEach((account) => totalAccounts += 1);
  return totalAccounts;
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//This function returns a number that represents the number of books that are currently checked out of the library.

function getBooksBorrowedCount(books) {
//initialize counter variable  
  let totalBooksCheckedOut = 0;

//for each book, check return status  
  books.forEach((book) => {
//initialize return status variable to hold return value    
    let isReturned = book.borrows[0].returned;
//     console.log(isReturned)
    
//if book has not been returned, add 1 to counter variable    
    if (isReturned === false){
      totalBooksCheckedOut += 1;
    }
  })
  return totalBooksCheckedOut;
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//***helper function (topFive) used to return first 5 elements in an array***

function topFive(array) {
  let mostPopular = array

    .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
    .slice(0, 5);

  return mostPopular;
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*NOTE: .findIndex Method:
  method returns the index (position) of the first element that passes a test.
  method returns -1 if no match is found.
*/ 

//This function returns an array containing five objects or fewer that represents the most common occurring genres, ordered from most common to least.

function getMostCommonGenres(books) {
//create a const variable for books that maps the books genre
    const genresOfBooks = books.map((book) => book.genre);
      console.log(genresOfBooks);
//create an empty array to return at end of function
    const genreCount = [];
  
//map over book genres from the previously created genresOfBooks variable
  genresOfBooks.map((genre) => {    
//create location variable that checks genreCount array. Use .findIndex method to check if genre already exists.
      const location = genreCount.findIndex((element) => element.name === genre);
        console.log(location);
//if genre already exists and is greater than 0, increase count by 1
      if (location >= 0) {
        genreCount[location].count += 1;
//else, push a new genre object onto array with count of 1
      } else {
        genreCount.push({ name: genre, count: 1 });
      }
    });
      console.log(genreCount);
    
  return topFive(genreCount);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//This function returns an array containing five objects or fewer that represents the most popular books, ordered from most common to least.

function getMostPopularBooks(books) {
  let popularBooks = [];
// loops through 'books'; creates new objects with 'name' and 'count' keys, and pushes them onto 'popularBooks' array.
  const borrows = books.reduce((acc, book) => {
    popularBooks.push({ name: book.title, count: book.borrows.length });
  }, []);
//   console.log(popularBooks);
   
// use helper function (topFive) to return top 5 most popularBooks 
  return topFive(popularBooks);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//This function returns an array containing five objects or fewer that represents the most popular authors, ordered from most common to least.

function getMostPopularAuthors(books, authors) {
   let result = [];
  
  authors.forEach((author) => {
    let theAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
  };
//       console.log(theAuthor);
    
    books.forEach((book) => {
      if (book.authorId === author.id) {
        theAuthor.count += book.borrows.length;
   }
  });
//      console.log(theAuthor);
    
    result.push(theAuthor);
 });
  return topFive(result);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
