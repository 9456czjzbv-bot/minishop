import { useContext } from "react"
import { PanierContext } from "../context/PanierContext"


export function Panier() {
    const {
        panier,
        supprimerDuPanier,
        total,
        nombreArticles
    } = useContext(PanierContext)


    return (
        <section>

            <h1>Mon panier</h1>
            <p>Nombre d'articles : {nombreArticles}</p>

            {panier.map((produit) => (
                <div key={produit.id}>
                    <h3>{produit.nom}</h3>
                    <p>Prix : {produit.prix}</p>
                    <p>Quantité : {produit.quantite}</p>
                    <p>Sous-total : {produit.prix * produit.quantite}$</p>

                    <button onClick={() => supprimerDuPanier(produit.id)}>
                        Supprimer
                    </button>

                </div>
            ))}

            <h2>Total : {total}$</h2>
        </section>
    )
}