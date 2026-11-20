import { ProductCard } from "../components/ProductCard"

export function Produits({ products, ajouterAuPanier }) {

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