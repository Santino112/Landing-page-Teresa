import React from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuienesSomos from './components/QuienesSomos'
import QueEsTeresa from './components/QueEsTeresa'
import Footer from './components/Footer'

const theme = createTheme({
  palette: {
    primary: { main: '#1976D2' },
    background: { default: '#ffffff' },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Playfair Display', serif" },
    h2: { fontFamily: "'Playfair Display', serif" },
    h3: { fontFamily: "'Playfair Display', serif" },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 500 },
      },
    },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <QuienesSomos />
      <QueEsTeresa />
      <Footer />
    </ThemeProvider>
  )
}
