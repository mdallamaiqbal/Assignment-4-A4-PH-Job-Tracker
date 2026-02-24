# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
* getElementById is select a single elements by specific id. It is one element catch;
* getElementsByClassName is select all elements with the same class name.It is multiple element catch;
* querySelector is select the first element that matches a css selector.It is one element catch;
* querySelectorAll is select all elements that match a CSS selector.It is multiple element catch;
# 2. How do you create and insert a new element into the DOM?
* 1.Create the element;
* 2.Customize the element;
* 4.Insert the element into the DOM;
# 3. What is Event Bubbling? And how does it work?
* Event Bubbling is a mechanism where an event triggered on a child element then upward through its parent elements to the root;
# 4. What is Event Delegation in JavaScript? Why is it useful?
* Event Delegation is a pattern used to handle events efficiently by attaching a single event listener to a parent element instead of adding listeners to multiple similar child elements, and then identifying the actual source of the event using the event.target property;
# 5. What is the difference between preventDefault() and stopPropagation() methods?
* 1.preventDefault() stop the browser's default behavior for an event
* 2.stopPropagation() stop the event from traveling up or down the DOM tree