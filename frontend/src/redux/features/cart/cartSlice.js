import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    selectedItems: 0,
    totalPrice: 0,
    tax: 0,
    taxrate: 0.05,  // Ensure the key is consistent (all lowercase here)
    grandTotal: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExist = state.products.find((product) => product.id === action.payload.id);
            
            if (!isExist) {
                // Add the product immutably
                state.products = [...state.products, { ...action.payload, quantity: 1 }];
            } else {
                console.log("Item already added");
            }
          
            // Update derived state
            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.tax = setTax(state);  // Fix tax calculation
            state.grandTotal = setGrandTotal(state);  // Fix grandTotal calculation
        },
        updateQuantity: (state, action) => {
            const products = state.products.map((product) => {
                if (product.id === action.payload.id) {
                    if (action.payload.type === 'increment') {
                        return { ...product, quantity: product.quantity + 1 };  // Return new product object
                    } else if (action.payload.type === 'decrement' && product.quantity > 1) {
                        return { ...product, quantity: product.quantity - 1 };  // Return new product object
                    }
                }
                return product;
            });
        
            state.products = products;  // Update state with the new products array
        
            // Update derived state
            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.tax = setTax(state);  // Fix tax calculation
            state.grandTotal = setGrandTotal(state);  // Fix grandTotal calculation
        },
        removeFromCart:(state,action) => {
            state.products = state.products.filter((product) => product.id !== action.payload.id);
            state.selectedItems = setSelectedItems(state);
            state.totalPrice = setTotalPrice(state);
            state.tax = setTax(state);  // Fix tax calculation
            state.grandTotal = setGrandTotal(state);  // Fix grandTotal calculation
        },
        clearCart: (state) => {
            state.products = [];
            state.selectedItems = 0;
            state.totalPrice = 0;
            state.tax = 0;
            state.grandTotal = 0;
        }
        
    },
});

// Helper functions for calculating totals
export const setSelectedItems = (state) => state.products.reduce((total, product) => {
    return total + product.quantity;  // No need for `Number()`, just sum quantities
}, 0);

export const setTotalPrice = (state) => state.products.reduce((total, product) => {
    return total + (product.quantity * product.price);  // No need for `Number()`
}, 0);

export const setTax = (state) => {
    return state.totalPrice * state.taxrate;  // Use the correct `taxrate`
};

export const setGrandTotal = (state) => {
    return state.totalPrice + state.tax;  // Grand total is price + tax
};

export const { addToCart, updateQuantity, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
