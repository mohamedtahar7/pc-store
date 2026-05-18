"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  useMemo,
} from "react";

// Matches your new PC Store product structure
export interface Product {
  id: string; // Changed to string to match "build-001" format
  name: string;
  category: string;
  price: number;
  image: string; // Changed from 'img' to 'image'
  variations?: Record<string, string[]>;
  [key: string]: any; 
}

// Items are unique by ID + the specific combination of variations chosen
export interface CartItem extends Omit<Product, "variations"> {
  selectedVariations: Record<string, string>; // e.g., { color: "Matte Black", coolant: "Electric Blue" }
  amount: number;
}

interface CartContextType {
  cart: CartItem[];
  itemAmount: number;
  total: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addToCart: (product: Product, variations: Record<string, string>) => void;
  removeFromCart: (id: string, variations: Record<string, string>) => void;
  clearCart: () => void;
  increaseAmount: (id: string, variations: Record<string, string>) => void;
  decreaseAmount: (id: string, variations: Record<string, string>) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Helper to check if two variation objects are identical
  const areVariationsEqual = (v1: Record<string, string>, v2: Record<string, string>) => {
    return JSON.stringify(v1) === JSON.stringify(v2);
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("pc_store_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (err) {
        console.error("Failed to parse cart data", err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pc_store_cart", JSON.stringify(cart));
  }, [cart]);

  const { total, itemAmount } = useMemo(() => {
    return cart.reduce(
      (acc, item) => ({
        total: acc.total + item.amount * item.price,
        itemAmount: acc.itemAmount + item.amount,
      }),
      { total: 0, itemAmount: 0 }
    );
  }, [cart]);

  const addToCart = (product: Product, selectedVariations: Record<string, string>) => {
    const existingItem = cart.find(
      (item) => 
        item.id === product.id && 
        areVariationsEqual(item.selectedVariations, selectedVariations)
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id && areVariationsEqual(item.selectedVariations, selectedVariations)
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      );
    } else {
      const { variations, ...rest } = product;
      const newItem: CartItem = { ...rest, selectedVariations, amount: 1 };
      setCart([...cart, newItem]);
    }
    setIsOpen(true);
  };

  const removeFromCart = (id: string, selectedVariations: Record<string, string>) => {
    setCart(
      cart.filter(
        (item) => !(item.id === id && areVariationsEqual(item.selectedVariations, selectedVariations))
      )
    );
  };

  const clearCart = () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      setCart([]);
    }
  };

  const increaseAmount = (id: string, selectedVariations: Record<string, string>) => {
    setCart(
      cart.map((item) =>
        item.id === id && areVariationsEqual(item.selectedVariations, selectedVariations)
          ? { ...item, amount: item.amount + 1 }
          : item
      )
    );
  };

  const decreaseAmount = (id: string, selectedVariations: Record<string, string>) => {
    const item = cart.find(
      (i) => i.id === id && areVariationsEqual(i.selectedVariations, selectedVariations)
    );
    if (!item) return;

    if (item.amount > 1) {
      setCart(
        cart.map((i) =>
          i.id === id && areVariationsEqual(i.selectedVariations, selectedVariations)
            ? { ...i, amount: i.amount - 1 }
            : i
        )
      );
    } else {
      removeFromCart(id, selectedVariations);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        itemAmount,
        total,
        isOpen,
        setIsOpen,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};