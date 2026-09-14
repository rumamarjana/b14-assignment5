1.What is JSX, and why is it used in React?
Ans:JSX (JavaScript XML) is a syntax used in React that allows us to write HTML-like code inside JavaScript.
JSX makes React code easier to read and write because we can write the UI structure directly alongside JavaScript logic.

2.What is the difference between props and state?
Ans:Props are data passed from a parent component to a child component and are read-only.
State is data managed inside a component that can change and cause the component to re-render.

3.What does the useState hook do, and where did you use it in this project?
Ans:useState is a React Hook used to create and manage changing data inside a component.
In this project, I used it to manage the selected/added technologies (stack items) and update the UI when a technology is added or removed.

4.What does the useEffect hook do, and why did you need it to load the JSON data?
Ans:useEffect is a React Hook used to perform side effects, such as fetching data from an API or JSON file.
I used it to load the JSON data when the component first renders and then store the data in state so it could be displayed in the UI.

5.Why does every item in a .map() list need a unique key prop?
Ans:A unique key helps React identify each item in a list and efficiently update the UI when items change.
It also helps React avoid unnecessary re-renders and keeps list updates more accurate.

6.What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans:Conditional rendering means showing different UI based on a condition.
I used it to show an “Your Stack is empty” message when there are no items in the stack.

7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Ans:A parent passes data to a child using props.
A child sends data back to the parent by calling a callback function passed through props.





***Technology that I use
1.daisyui
2.tailwind css
3.react icon
