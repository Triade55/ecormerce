import create from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartState = {
  carts: CartItem[];
  qte: number;
  addCart: (item: CartItem) => void;
  calculateQte: () => void;
};

// Créer le store Zustand
const useCartStore = create<CartState>((set) => ({
  carts: [],
  qte: 0,

  // Ajouter un article au panier
  addCart: (newItem) =>
    set((state) => {
      const existingItem = state.carts.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Si l'article existe déjà, on met à jour sa quantité
        const updatedCarts = state.carts.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
        return { carts: updatedCarts };
      } else {
        // Sinon, on l'ajoute au panier
        return { carts: [...state.carts, newItem] };
      }
    }),

  // Calculer la quantité totale
  calculateQte: () =>
    set((state) => ({
      qte: state.carts.reduce((acc, item) => acc + item.quantity, 0),
    })),
}));

export default useCartStore;
