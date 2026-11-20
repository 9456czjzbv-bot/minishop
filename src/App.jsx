import { Routes, Route, Link } from "react-router-dom"
import { Accueil } from "./pages/accueil"
import { Produits } from "./pages/produits"
import { Panier } from "./pages/panier"
import { useContext } from "react"
import { PanierContext } from "./context/PanierContext"

export default function App() {
  const { nombreArticles } = useContext(PanierContext)

  const products = [
    { id: 1, nom: "iPhone 14", prix: 500 },
    { id: 2, nom: "Samsung S23", prix: 450 },
    { id: 3, nom: "iPhone 13", prix: 350 },
    { id: 4, nom: "Tecno Camon", prix: 200 }
  ]


  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/produits">Produits</Link> |{" "}
        <Link to="/panier">Panier ({nombreArticles})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/produits" element={<Produits products={products} />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>
    </div>
  );
}