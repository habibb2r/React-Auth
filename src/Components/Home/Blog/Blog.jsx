import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container mt-5>
            <div className='mt-4'>
                <h3>Tell us the differences between uncontrolled and controlled components.</h3>
                <p>Controlled components are React components that have their state managed by the parent component or by a global state management library, such as Redux or MobX. Uncontrolled components in React Vite are usually components that use the ref attribute to access their DOM node directly, without relying on Reacts state management Usage:Controlled components are useful for complex components that require fine-grained state management, such as forms or custom inputs.Uncontrolled components in React Vite are useful for simpler components that do not require much state management, such as simple input or button components. State management:In React Vite, controlled components use the useState or useReducer hooks to manage their state, which is typically passed down from the parent component. Uncontrolled components in React Vite do not use Reacts state management and rely instead on the DOM API to manipulate their state.Event handling:Controlled components in React Vite typically define event handlers for user interactions and update their state accordingly.Uncontrolled components in React Vite use the DOM API directly to handle user events, which can be accessed through the ref attribute</p>
            </div>
            <div>
                <h3>How to validate React props using PropTypes</h3>
                <p>When you create a React component, you can pass data to it as props. Props are essentially arguments that you pass to the component when you use it. However, it's important to ensure that the props passed to your component are of the correct type and format. This is where PropTypes comes in. PropTypes is a utility that is included in the React library. It allows you to define the expected types of your component's props. By defining prop types, you can catch errors and bugs early in the development process, before they cause problems in your application. import PropTypes from 'prop-types'; PropTypes is a powerful tool for validating React props. By defining prop types for your components, you can catch errors and bugs early, and ensure that your components are receiving the correct data</p>
            </div>
            <div>
                <h3>Tell us the difference between nodejs and express js.</h3>
                <p>Node.js is a runtime environment that allows developers to use JavaScript on the server-side. It's built on the Chrome V8 JavaScript engine and provides an event-driven, non-blocking I/O model, making it a popular choice for building scalable, high-performance applications. Node.js provides a set of built-in modules for working with file systems, network communication, and other low-level system interactions. Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of abstractions and utilities for building web applications, making it easier to handle tasks such as routing, middleware, and server-side rendering. Express.js provides a minimalistic and flexible framework that can be used to build web applications of any size and complexity</p>
            </div>
            <div>
                <h3>What is a custom hook, and why will you create a custom hook?</h3>
                <p>In React, a custom hook is a function that allows you to reuse stateful logic across multiple components. Custom hooks are a way to extract reusable logic from components, which can make your code more modular and easier to maintain. Custom hooks are regular JavaScript functions, but they have a specific naming convention - their name should always start with the word "use". This tells React that the function is a custom hook and should be treated as such.</p>
            </div>
        </Container>
    );
};

export default Blog;