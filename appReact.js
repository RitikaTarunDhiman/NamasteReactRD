//Nested structure
// <div id = "parent">
// <div id="child">
//<h1> I am nested heading one</h1>
// </div>

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [React.createElement("h1", {id:"child"}, "I am nested heading 1"),
//   React.createElement("h2", {id:"child"},"I am sibling H2")]
//   )
// );
const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child1" },
    [React.createElement("h1", {id:"child"}, "I am nested heading 1"),
  React.createElement("h2", {id:"child"},"I am sibling H2")]
  ),React.createElement(
    "div",
    { id: "child2" },
    [React.createElement("h1", {id:"child"}, "I am nested heading 2"),
  React.createElement("h2", {id:"child"},"I am sibling H2")]
  )]
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World using separate js in another file !!!"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
