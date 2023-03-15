import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      100: "#E2E8F0",
      200: "#CBD5E1",
      300: "#A0AEC0",
      400: "#718096",
      500: "#4A5568",
      600: "#2D3748",
      700: "#1A202C",
      800: "#171923",
      900: "#0E141B",
    },
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Poppins, sans-serif",
  },
  components: {
    ModalContent: {
      variants: {
        custom: {
          bg: "rgba( 14, 37, 69, 0.45 )",
          borderRadius: "10px",
          borderColor: "1px solid rgba( 255, 255, 255, 0.18 )",
          backdropFilter: "blur( 3px )",
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={customTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
