import { Routes, Route, Link } from "react-router-dom"
import { Accueil } from "./pages/accueil"
import { Produits } from "./pages/produits"
import { Panier } from "./pages/panier"
import { useState } from "react"

export default function App() {
  const [panier, setPanier] = useState([])

  const products = [
    { id: 1, nom: "iPhone 14", prix: 500 },
    { id: 2, nom: "Samsung S23", prix: 450 },
    { id: 3, nom: "iPhone 13", prix: 350 },
    { id: 4, nom: "Tecno Camon", prix: 200 }
  ]

  const ajouterAuPanier = (produit) => {
    setPanier((ancienPanier) => {
      const existeDeja = ancienPanier.some(
        (element) => element.id === produit.id
      )
      if (existeDeja) {
        return ancienPanier.map((element) =>
          element.id === produit.id
            ? { ...element, quantite: element.quantite + 1 }
            : element
        )
      } else {
        return [...ancienPanier, { ...produit, quantite: 1 }]
      }
    })
  }

  const supprimerDuPanier = (id) => {
    setPanier((ancienPanier) =>
      ancienPanier.filter((produit) => produit.id !== id))
  }

  const total = panier.reduce((somme, produit) => {
    return somme + produit.prix * produit.quantite
  }, 0);

  const nombreArticles = panier.reduce((somme, produit) => {
    return somme + produit.quantite
  }, 0)
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link> |{" "}
        <Link to="/produits">Produits</Link> |{" "}
        <Link to="/panier">Panier ({nombreArticles})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Accueil />} />

        <Route
          path="/produits"
          element={
            <Produits
              products={products}
              ajouterAuPanier={ajouterAuPanier}
            />
          }
        />

        <Route
          path="/panier"
          element={
            <Panier
              panier={panier}
              supprimerDuPanier={supprimerDuPanier}
              total={total}
              nombreArticles={nombreArticles}
            />
          }
        />
      </Routes>
    </div>
  );
}