import React from 'react'
import {
  Box, Container, Grid, Typography, Button,
  Card, CardContent, Avatar, Stack,
} from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups'
import SectionChip from './SectionChip'

const TEAM = [
  { initial: 'A', name: "D'Aloia, Alejo", role: 'CEO & founder' },
  { initial: 'S', name: 'Scampone Garcia, Santino', role: 'CEO & Co-founder' },
]

export default function QuienesSomos() {
  return (
    <Box id="nosotros" sx={{ py: { xs: 8, md: 12 }, background: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5}>
            <SectionChip>Quiénes somos</SectionChip>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.75rem' },
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: '#0A1628',
                mb: 2.5,
              }}
            >
              Un equipo construyendo el futuro 
            </Typography>

            <Typography sx={{ color: '#000000', lineHeight: 1.85, mb: 2 }}>
              Somos una iniciativa impulsada por dos desarrolladores con una visión compartida: democratizar el acceso a la inteligencia artificial para mejorar la calidad de vida de las personas. Creemos firmemente que la tecnología es el motor de transformación necesario para crear un entorno asistencial más humano y eficiente.
            </Typography>
            <Typography sx={{ color: '#000000', lineHeight: 1.85, mb: 3.5 }}>
              Nuestro foco está en crear productos útiles, confiables y accesibles — tecnología que trabaja para vos, no al revés.
            </Typography>

            <Button
              href="#contacto"
              variant="outlined"
              sx={{
                borderColor: '#1976D2',
                color: '#1976D2',
                borderRadius: '100px',
                px: 3, py: 1.1,
                '&:hover': { background: 'rgba(25,118,210,0.05)' },
              }}
            >
              Ponerse en contacto →
            </Button>
          </Grid>

          {/* Right: team grid */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              {TEAM.map((m, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Card
                    elevation={0}
                    sx={{
                      border: '1px solid #E3EBF6',
                      borderRadius: '16px',
                      transition: 'transform 0.2s ease',
                      '&:hover': { transform: 'translateY(-4px)' },
                    }}
                  >
                    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2.5 }}>
                      <Avatar
                        sx={{
                          width: 48, height: 48,
                          background: 'linear-gradient(135deg,#1976D2,#42A5F5)',
                          fontFamily: "'Playfair Display', serif",
                          fontSize: '1.25rem',
                        }}
                      >
                        {m.initial}
                      </Avatar>
                      <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', color: '#000000' }}>
                          {m.name}
                        </Typography>
                        <Typography sx={{ fontSize: '0.78rem', color: '#83949d' }}>
                          {m.role}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
