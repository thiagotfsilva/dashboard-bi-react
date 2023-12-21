import { useApiContext } from './hook/useApiContext';

function App() {
  const { obejtivosFetch } = useApiContext();

  return (
    <div className="app">
      <div className="container">
        <select>
          {obejtivosFetch &&
            obejtivosFetch.map((objetivo) => (
              <option value={objetivo.id} key={objetivo.id}>
                {objetivo.nome}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default App;
