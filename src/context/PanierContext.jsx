import { createContext, useState } from "react";

export const PanierContext = createContext(null)

export function PanierProvider({ children }) {
    const [panier, setPanier] = useState([])

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
            }
            return [...ancienPanier, { ...produit, quantite: 1 }]
        })
    }

    const supprimerDuPanier = (id) => {
        setPanier((ancienPanier) =>
            ancienPanier.filter((produit) => produit.id !== id)
        );
    };

    const total = panier.reduce(
        (somme, produit) => somme + produit.prix * produit.quantite,
        0
    )

    const nombreArticles = panier.reduce(
        (somme, produit) => somme + produit.quantite,
        0
    )

    return (
        <PanierContext.Provider
            value={{
                panier,
                ajouterAuPanier,
                supprimerDuPanier,
                total,
                nombreArticles
            }}
        >
            {children}
        </PanierContext.Provider>
    )
}