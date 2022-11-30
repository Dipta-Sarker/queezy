import Accordion from 'react-bootstrap/Accordion';

function Blog() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the purpose of react router</Accordion.Header>
        <Accordion.Body>
        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does context api work</Accordion.Header>
        <Accordion.Body>
        Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is useref in react</Accordion.Header>
        <Accordion.Body>
        Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with myRef , React will set its .current property to the corresponding DOM node whenever that node changes.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Blog;