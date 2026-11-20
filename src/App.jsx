import { useState } from "react"
import { ProductCard } from "./components/ProductCard"

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

  return <div>
    <h1>Bienvenue sur Minishop</h1>

    <p>Mon panier : {nombreArticles} article(s)</p>

    {products.map((produit) => (
      <ProductCard
        key={produit.id}
        nom={produit.nom}
        prix={produit.prix}
        produit={produit}
        ajouterAuPanier={ajouterAuPanier}
      />
    ))}
    <section>
      <h2>Mon panier</h2>
      {panier.map((produit) => (
        <div key={produit.id}>
          <h3>{produit.nom}</h3>
          <p>{produit.prix}$</p>
          <p>Quantité : {produit.quantite}</p>
          <button onClick={() => supprimerDuPanier(produit.id)}>
            Supprimer
          </button>
        </div>
      ))}
      <p>Total: {total}$</p>
    </section>
  </div>
}