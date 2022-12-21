import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {
  //   console.log("click");
  // };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "Aqua" : "pink"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
      {/* <Button color="blue" text="Hello1" />
      <Button color="red" text="Hello2" /> */}
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};

// Header.PropTypes = {
//   title: PropTypes.string.isRequired,
// }; //
// css in js
// const headingStyle = {
//   color: "blue",
//   backgroundColor: "black",
// };
export default Header;
