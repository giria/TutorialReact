export default function MyButton() {
  function handleClick(name) {
    alert(`Hello ${name}`);
  }

  return (
    <button onClick={() => handleClick('Alice')}>
      Click me
    </button>
  );
}