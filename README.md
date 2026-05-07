# Teresa — Landing Page

Landing page base para Teresa IA, construida con **React + Vite + Material UI v5**.

## Stack

- React 18
- Vite 5
- MUI (Material UI) v5
- @mui/icons-material

## Estructura

```
src/
├── main.jsx                  # Entry point
├── App.jsx                   # Theme + layout raíz
└── components/
    ├── Navbar.jsx            # Navegación fija con blur
    ├── Hero.jsx              # Sección principal + chat card + stats
    ├── QuienesSomos.jsx      # Sobre el equipo
    ├── QueEsTeresa.jsx       # Features + frase de cierre
    ├── Footer.jsx            # Links + legal
    └── SectionChip.jsx       # Componente reutilizable de etiqueta
```

## Instalación y uso

```bash
npm install
npm run dev
```

La app corre en `http://localhost:5173`

## Build para producción

```bash
npm run build
npm run preview
```

## Personalización rápida

| Qué cambiar            | Dónde             |
|------------------------|-------------------|
| Colores del tema       | `src/App.jsx` → `createTheme` |
| Textos del hero        | `src/components/Hero.jsx` |
| Equipo                 | `src/components/QuienesSomos.jsx` → array `TEAM` |
| Features de Teresa     | `src/components/QueEsTeresa.jsx` → array `FEATURES` |
| Links del footer       | `src/components/Footer.jsx` → array `FOOTER_COLS` |
| Stats (números)        | `src/components/Hero.jsx` → array `STATS` |
