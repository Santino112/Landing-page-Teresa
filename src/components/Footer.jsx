import React from 'react'
import { Box, Container, Grid, Typography, Stack, Divider } from '@mui/material'

const FOOTER_COLS = [
  { title: 'Producto', links: ['Funcionalidades', 'Integraciones', 'Precios', 'Casos de uso'] },
  { title: 'Empresa',  links: ['Quiénes somos', 'Blog', 'Carreras', 'Prensa'] },
  { title: 'Contacto', links: ['teresa@gmail.com', 'LinkedIn', 'Twitter / X', 'Soporte'] },
]

const LEGAL_LINKS = ['Privacidad', 'Términos', 'Cookies']

export default function Footer() {
  return (
    <Box
      id="contacto"
      sx={{
        background: '#060E1A',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        pt: 8, pb: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Top */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: '1.75rem',
                color: '#fff',
                mb: 1.5,
              }}
            >
              Teresa
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.8, maxWidth: '28ch' }}>
              Inteligencia Artificial diseñada para trabajar con vos, potenciando tu rol en el cuidado familiar.
            </Typography>
          </Grid>

          {/* Columns */}
          {FOOTER_COLS.map((col) => (
            <Grid item xs={6} md={2.5} key={col.title}>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.65)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  mb: 2.5,
                }}
              >
                {col.title}
              </Typography>
              <Stack spacing={1.25}>
                {col.links.map((link) => (
                  <Typography
                    key={link}
                    component="a"
                    href="#"
                    sx={{
                      display: 'block',
                      color: 'rgba(255,255,255,0.35)',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      '&:hover': { color: 'rgba(255,255,255,0.8)' },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)', mb: 3 }} />

        {/* Bottom bar */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem' }}>
            © 2026 Teresa. Todos los derechos reservados.
          </Typography>
          <Stack direction="row" spacing={3}>
            {LEGAL_LINKS.map((l) => (
              <Typography
                key={l}
                component="a"
                href="#"
                sx={{
                  color: 'rgba(255,255,255,0.25)',
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': { color: 'rgba(255,255,255,0.6)' },
                }}
              >
                {l}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
