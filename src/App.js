import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Header</h1>
      </div>

      <div className="row">
        <h1 className="column1">column 1</h1>
        <h1 className="column2">Column 2</h1>
        <h1 className="column3">column 3</h1>
        <h1 className="column4">column 4</h1>
      </div>
      <div className="footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}
