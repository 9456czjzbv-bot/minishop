import { useState } from "react"
import { ProductCard } from "./components/ProductCard"

export default function App() {
  const [panier, setPanier] = useState([])

  const products = [
    { id: 1, nom: "iPhone 14", prix: 500 },
    { id: 2, nom: "iPhone 14", prix: 500 },
    { id: 3, nom: "iPhone 14", prix: 500 },
    { id: 4, nom: "iPhone 14", prix: 500 }
  ]

  const ajouterAuPanier = (produit) => {
    setPanier((ancienPanier) => [...ancienPanier, produit])
  }

  return <div>
    <h1>Bienvenue sur Minishop</h1>

    <p>Mon panier : {panier.length} produit(s)</p>

    {products.map((produit) => (
      <ProductCard
        key={produit.id}
        nom={produit.nom}
        prix={produit.prix}
        produit={produit}
        ajouterAuPanier={ajouterAuPanier}
      />
    ))}
  </div>
}