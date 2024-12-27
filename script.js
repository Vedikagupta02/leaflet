const books = [
    { title: 'Norwegian Wood', author: 'Haruki Murakami' },
    { title: 'Divergent Series Pack', author: 'Veronica Roth' },
    { title: 'Three Thousand Stitches: Ordinary People', author: 'Sudha Murthy' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'Harry Potter and the Cursed Child', author: 'J. K. Rowling, Jack Thorne, and John Tiffany' },
    { title: 'Emma', author: 'Jane Austen' }
  ];
  
  const bookList = document.getElementById('book-list');
  
  function displayBooks() {
    books.forEach(book => {
      const li = document.createElement('li');
      li.textContent = `${book.title} by ${book.author}`;
      li.classList.add('book-item');
      bookList.appendChild(li);
    });
  }
  
  displayBooks();
  