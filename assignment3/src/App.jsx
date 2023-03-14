import './app.css'
import DataView from './components/data_view/DataView'
import Header from './components/top_section/Header'

function App() {
  return (
    <div className="App bg-main min-h-screen font-montserrat">
      <Header />
      <DataView />
    </div>
  )
}

export default App
