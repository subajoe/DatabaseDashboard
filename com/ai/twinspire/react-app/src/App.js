import './App.css';
const importImages = () => {
  const images = require.context("./images", false, /\.(png|jpe?g|svg)$/);
  return images.keys().map((key, index) => ({
    id: index + 1,
    src: images(key),
  }));
};
//
const images =importImages()

function MultipleImageButtons() {

  const handleClick = (id) => {
    alert(`Image button ${id} clicked!`);
  };

  return (
    <div>
      {images.map((image) => (
        <button
          key={image.id}
          onClick={() => handleClick(image.id)}
          style={{ border: "none", background: "none", padding: 0, cursor: "pointer", margin: 5 }}
          aria-label={`Image button ${image.id}`}
        >
          <img src={image.src} alt={image.alt} style={{ width: 100, height: 100 }} />
        </button>
      ))}
    </div>
  );
}

function App() {
  const handleClick = (id) => {
    alert(`Image button ${id} clicked!`);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <MultiImageButton onClick={handleClick} /> */}
          <MultipleImageButtons onClick={handleClick} />
        </div>
      </header>
    </div>
       
  );
}

export default App;
