import Child from "./Child";
function Parent({ name }) {
  return (
    <>
      <div>Parent component , name is {name}</div>
      <Child name={name} />
    </>
  );
}

export default Parent;
