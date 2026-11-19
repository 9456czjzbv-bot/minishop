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
    setPanier((ancienPanier) => [...ancienPanier, produit])
  }

  const supprimerDuPanier = (indexAsupprimer) => {
    setPanier((ancienPanier) =>
      ancienPanier.filter((produit, index) => index !== indexAsupprimer))
  }

  const total = panier.reduce((somme, produit) => {
    return somme + produit.prix
  }, 0);

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
    <section>
      <h2>Mon panier</h2>
      {panier.map((produit, index) => (
        <div key={index}>
          <h3>{produit.nom}</h3>
          <p>{produit.prix}$</p>
          <button onClick={() => supprimerDuPanier(index)}>
            Supprimer
          </button>
        </div>
      ))}
      <p>Total: {total}$</p>
    </section>
  </div>
}