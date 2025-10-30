



10. Inside the `function displayRandomQuote()`
call the function `getRandomQuote()` and store its returned value in the variable named `randomQuote` using `const`

11. Inside the `function displayRandomQuote()` - find the HTML element with `id="quotes"` using `getELementByID` and sets its text to the value stored in `randomQuote`.

12. Outside the `function displayRandomQuote()`  - find the HTML element with `id="displayQuoteBtn"` and add an `addEventListener` that take action when the user `click` on the `button` and make a call to the function `displayRandomQuote()`.
Here is an example on how you find an element combined with an `addEventListener` :
    ```javaScript
    const document.getElementById("idname").addEventListener('click', nameOfFunction);
    ```
  
13. Open Go Live in your VS Code editor and check that the content has been updated. 

