import Footer from "./components/Footer"
import Header from "./components/Header"
import Pagina from "./pages/Pagina"

function App() {
  return (
    <>
    <main className="bg-foxus dark:bg-nav font-offside">
      <Header />
      <Pagina />
      <Footer />
    </main>
    </>
  )
}

export default App