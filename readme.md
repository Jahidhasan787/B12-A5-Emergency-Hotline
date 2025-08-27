1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 
getElementById: Selects only one element. Return a single element and ID must be unique in HTML.
getElementsByClassName: Selects all elements with the given class.Returns a live HTMLCollection.
querySelector:Select the first element that matches a css selector. Return a single element.
querySelectorAll: Select all element that matches a css selector.Returns a static Node list.

2. How do you create and insert a new element into the DOM?

Answer:
    1.Create a new element 
    2.Add content to it
    3.Insert it into the DOM
  example:  
  const newTag =  document.createElement('li');
        newTag.innerText ='5th list';
        const parent = document.getElementById('list-items') ;   
        parent.appendChild(newTag);

3. What is Event Bubbling and how does it work? 

Answer:
Event Bubbling is a mechanism in the DOM where an event starts from the target element and then'bubble up' to its ancestors until it reaches the document.
example: Handling clicks on a <ul> for all its <li> items with a single event listener.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer: 
Event Delegation is a technique in JavaScript where instead of attaching event listeners to multiple child elements individually, attach a single event listener to a parent element, the use event bubbling to handle events on its children.
How it works:
1.Events in DOM 'bubble up' from the clicked child element to its ancestors.
2.By putting a single listener on the parent,catch the event no matter which child triggered it.
3.Inside the handler,check which child was clicked using event.target.
Event Delegation Useful for:
1.This reduces memory usage and improves performance.
2.Less repetitive code since mange events in one place.

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:
preventDefault() means don't do what the browser normally does and stopPropagation() means don't let the event travel to parent elements.

