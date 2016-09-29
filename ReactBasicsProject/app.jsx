function Application () {
  return (
    <div>
      <h1>Hello</h1>
      <p>Rendered from App component</p>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById('container'));
