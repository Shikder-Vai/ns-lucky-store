import React from "react";

const Bonus = () => {
  return (
    <div>
      <div>
        <h2> How React Work</h2>
        <p>
          React uses a virtual DOM, which is a JS version of a DOM tree. As a
          result, it will use the virtual representation of the DOM when reading
          or writing to it. The virtual DOM will then attempt to update the
          browser's DOM in the most efficient manner possible. React elements,
          unlike browser DOM elements, are simple objects that are easy to
          generate. The DOM is updated to match the React elements by React DOM.
          The reason for this is that JS is really fast, thus it's worthwhile to
          have a DOM tree in it to speed up operations. Although React was
          designed to be used in the browser, it can also be utilized in the
          server using Node.js due to its design.
        </p>
      </div>
      <div>
        <h2>Difference between props and state</h2>
        <p>
          Props and state are linked. A component's state will frequently become
          the props of a child component. Props are supplied to the child as the
          second parameter in the parent's render method. Data is passed from
          one component to another using props. The state is a type of local
          data storage that can only be accessed by the component and cannot be
          shared with other components.
        </p>
      </div>
    </div>
  );
};

export default Bonus;
