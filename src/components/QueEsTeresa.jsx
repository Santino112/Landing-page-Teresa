import React from 'react'
import {
  Box, Container, Grid, Typography, Button,
  Card, CardContent,
} from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import BoltIcon from '@mui/icons-material/Bolt'
import LinkIcon from '@mui/icons-material/Link'
import SecurityIcon from '@mui/icons-material/Security'
import TuneIcon from '@mui/icons-material/Tune'
import InsightsIcon from '@mui/icons-material/Insights'
import SectionChip from './SectionChip'

const FEATURES = [
  { Icon: ChatBubbleOutlineIcon, title: 'Conversación natural',      desc: 'Teresa entiende el lenguaje cotidiano. Hablale como a una persona, sin comandos ni formatos especiales.' },
  { Icon: BoltIcon,              title: 'Respuestas al instante',    desc: 'Disponible 24/7. Teresa responde sin demoras, en cualquier momento que lo necesites.' },
  { Icon: LinkIcon,              title: 'Se integra a tu flujo',     desc: 'Se conecta con las herramientas que ya usás. Potencia tu trabajo sin cambiar cómo operás.' },
  { Icon: SecurityIcon,          title: 'Segura y confiable',        desc: 'Tu información es tuya. Operamos con estándares de seguridad altos y total transparencia.' },
  { Icon: TuneIcon,              title: 'Adaptación Personalizada',  desc: 'Teresa se integra a la rutina, los hábitos y la personalidad de tu ser querido. Es una IA que aprende del entorno familiar para evolucionar y ser cada día más efectiva en su apoyo' },
  { Icon: InsightsIcon,          title: 'Decisiones inteligentes',   desc: 'Analiza, sintetiza y te da el contexto que necesitás para decidir con más información.' },
]

export default function QueEsTeresa() {
  return (
    <Box
      id="teresa"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #0A1628 0%, #0D1B2E 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <SectionChip>¿Qué es Teresa?</SectionChip>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#fff',
              mb: 2,
            }}
          >
            Una IA que realmente cuida
          </Typography>

          <Typography
            sx={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              maxWidth: '52ch',
              mx: 'auto',
              mt: 3
            }}
          >
            Teresa no es solo una inteligencia artificial, es un ecosistema de acompañamiento diseñado para comprender la realidad de tu familiar, adaptarse a su ritmo de vida y brindarte la tranquilidad de que cada detalle 
            de su cuidado está bajo supervisión profesional.
          </Typography>
        </Box>

        {/* Features grid */}
        <Grid container spacing={2.5}>
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                elevation={0}
                sx={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  height: '100%',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 48px rgba(25,118,210,0.18)',
                  },
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Box
                    sx={{
                      width: 44, height: 44, borderRadius: '12px',
                      background: 'rgba(25,118,210,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      mb: 2.5,
                    }}
                  >
                    <Icon sx={{ color: '#64B5F6', fontSize: 22 }} />
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: '#fff',
                      mb: 1.25,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', lineHeight: 1.75 }}>
                    {desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Big statement */}
        <Box
          sx={{
            mt: 7, p: { xs: 3.5, md: 5 },
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            background: 'rgba(25,118,210,0.07)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: { xs: '1.5rem', md: '1.7rem' },
              lineHeight: 1.3,
              color: '#fff',
              flex: 1,
              letterSpacing: '-0.02em',
              textAlign: "center"
            }}
          >
            "Teresa no reemplaza a las personas,{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg,#64B5F6,#1976D2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontStyle: 'italic',
              }}
            >
              Potencia su capacidad de cuidado.
            </Box>
            "
          </Typography>
          <Button
            href="https://teresai-front-production.up.railway.app/"
            variant="contained"
            size="large"
            sx={{
              background: '#1976D2',
              borderRadius: '100px',
              px: 3.5, py: 1.3,
              fontWeight: 600,
              flexShrink: 0,
              '&:hover': { background: '#1565C0' },
            }}
          >
            Probar Teresa
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
