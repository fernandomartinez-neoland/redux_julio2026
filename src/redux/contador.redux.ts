import { createSlice } from "@reduxjs/toolkit";

// Definimos un tipo para nuestro estado usando TypeScript
// Esto nos permite que TypeScript nos avise si usamos mal el estado
interface CounterState {
  value: number; // el contador solo tiene un valor numérico
}

const initialState: CounterState = {
  value: 0, // el contador comienza en cero
};

const contador = createSlice({
  name: "contador",
  initialState,
  reducers: {
    aumentar: (valor) => {
      valor.value++;
    },
    decrementar: (valor) => {
      valor.value--;
    },
    resetear: (valor) => {
      valor.value = 0;
    },
  },
});


export const {aumentar, decrementar, resetear}=contador.actions;
export default contador.reducer;