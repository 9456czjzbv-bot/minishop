import { ProductCard } from "../components/ProductCard"
import { useContext } from "react";
import { PanierContext } from "../context/PanierContext";


export function Produits({ products }) {
    const { ajouterAuPanier } = useContext(PanierContext)

    return (
        <section>
            <h1>Catalogue des produits</h1>

            {products.map((produit) => (
                <ProductCard
                    key={produit.id}
                    nom={produit.nom}
                    prix={produit.prix}
                    produit={produit}
                    ajouterAuPanier={ajouterAuPanier}
                />
            ))}

        </section>
    )
}