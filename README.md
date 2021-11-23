# Getting Started with the myRead project

1. clone the poject 
2. run 'npm install' to install the packages/ libraries.
3. run 'npm start' to launch the project

## Project components and work flow

1. The project has 'App' component which is the starting component for after launching the project .

2. The 'App' component list the books on the shelf. The 'BooksList' Component is created to holds the books by shelf.

3. The BooksAPI  'getAll'  method is used to get the list of all books on the shelf.

4. The 'BooksList' component has a button which when clicked takes user to the search page which has list of all books by shelf .

5. The 'search' child component is passed the books and the updateBooks handler that is used to handle newly /current books on shelf to update into the selected shelf.

6. If the book selected in the search page is  a new book , and if the user secles the shelf, then that shelf propery is added to the book and updated to the list of books on the main page.

7. The search page initially loads the books on the shelf.

8. The search input field has ability to search the books by title or author.

9. Once searched ,the books searched by search query is populated using  'AllBooks' component.

10. 'AllBooks' component have child 'Book' component for displaying each book on the search page.

11. The books selected by shelf on search page are displayed on the main page within the self category .

12. If the book is not present on the main page, then the book is updated with the shelf key and then added to the main page.

13. Empty query or books not found will have empty list displayed on the search page.

14. React router is used to switch between the main apage and the search page.

15. Prop Types are used to validate the state or prop values.

