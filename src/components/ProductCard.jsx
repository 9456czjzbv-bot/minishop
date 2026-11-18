export function ProductCard({ nom, prix, produit, ajouterAuPanier }) {
    return <div>
        <h3>{nom}</h3>
        <p>{prix}$</p>
        <button onClick={() => ajouterAuPanier(produit)}>
            Ajouter au panier
        </button>
    </div>
}