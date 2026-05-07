import React from 'react';
import {
  Box, Container, Grid, Typography, Button, Stack,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SectionChip from './SectionChip';
import TeresaiLogo from "../assets/images/logo_teresAI.svg";

const STATS = [
  { num: '100%', label: 'Más eficiencia' },
  { num: '50', label: 'Usuarios activos' },
  { num: '24/7', label: 'Disponible' },
  { num: '<1s', label: 'Tiempo de respuesta' },
]

function ChatCard() {
  return (
    <Box
      sx={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '20px',
        backdropFilter: 'blur(20px)',
        p: 3,
        animation: 'float 4s ease-in-out infinite',
        '@keyframes float': {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }}
    >
      {/* Header */}
      <Stack direction="row" alignItems="center" spacing={1.5} mb={2.5}>
        <Box
          sx={{
            width: 36,
            height: 38,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1976D2, #42A5F5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <Box
            component="img"
            src={TeresaiLogo}
            alt="TERESAI Logo"
            sx={{
              width: '100%',    
              height: '100%',   
              objectFit: 'cover', 
            }}
          />
        </Box>
        <Box>
          <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem' }}>Teresa</Typography>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Box
              sx={{
                width: 6, height: 6, borderRadius: '50%', background: '#4CAF50',
                animation: 'pulse 2s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%,100%': { opacity: 1 },
                  '50%': { opacity: 0.4 },
                },
              }}
            />
            <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem' }}>En línea</Typography>
          </Stack>
        </Box>
      </Stack>

      {/* Messages */}
      <Stack spacing={1.5}>
        {[
          { text: '¡Hola! ¿En qué puedo ayudarte hoy?', user: false },
          { text: 'Necesito agendar un turno con el doctor para mañana a las 15:00 horas.', user: true },
          { text: 'Claro, te agendé tu turno para mañana a las 15:00 horas. ¿Necesitas algo más?', user: false },
        ].map((msg, i) => (
          <Box
            key={i}
            sx={{
              background: msg.user ? '#1976D2' : 'rgba(25,118,210,0.2)',
              borderRadius: msg.user ? '12px 12px 4px 12px' : '12px 12px 12px 4px',
              px: 2, py: 1.25,
              maxWidth: msg.user ? '78%' : '88%',
              ml: msg.user ? 'auto' : 0,
            }}
          >
            <Typography sx={{ color: '#fff', fontSize: '0.85rem', lineHeight: 1.6 }}>
              {msg.text}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* Input mock */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          mt: 2,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '12px',
          px: 2, py: 1.25,
        }}
      >
        <Typography sx={{ flex: 1, color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem' }}>
          ¿En que estás pensando hoy?
        </Typography>
        <Box
          sx={{
            width: 30, height: 30, borderRadius: '50%',
            background: '#1976D2',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <SendIcon sx={{ fontSize: 15, color: '#fff' }} />
        </Box>
      </Stack>
    </Box>
  )
}

export default function Hero() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0A1628 0%, #1B2E4B 50%, #0D2137 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 10, pb: 8,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-40%', right: '-20%',
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(25,118,210,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-30%', left: '-10%',
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(25,118,210,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '3rem', md: '4.25rem' },
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                color: '#fff',
                mb: 3,
                animation: 'fadeUp 0.8s 0.15s ease both',
                '@keyframes fadeUp': { from: { opacity: 0, transform: 'translateY(32px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
              }}
            >
              Conocé a{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg,#64B5F6,#1976D2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Teresa
              </Box>
              ,<br />
              <Box component="span" sx={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>
                tu nueva cuidadora
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.8,
                mb: 4,
                maxWidth: '46ch',
                animation: 'fadeUp 0.8s 0.3s ease both',
              }}
            >
              Teresa opera como una <strong>interfaz de monitoreo inteligente</strong> que centraliza la actividad diaria del adulto mayor para facilitar la gestión del familiar o cuidador a cargo.
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              sx={{ animation: 'fadeUp 0.8s 0.45s ease both' }}
            >
              <Button
                href="#teresa"
                variant="contained"
                size="large"
                sx={{
                  background: '#1976D2',
                  borderRadius: '100px',
                  px: 3.5, py: 1.3,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  '&:hover': {
                    background: '#1565C0',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(25,118,210,0.4)',
                  },
                }}
              >
                Conocer más
              </Button>
              <Button
                href="#contacto"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'rgba(255,255,255,0.25)',
                  color: '#fff',
                  borderRadius: '100px',
                  px: 3.5, py: 1.3,
                  fontSize: '0.95rem',
                  '&:hover': { borderColor: '#fff', background: 'rgba(255,255,255,0.05)' },
                }}
              >
                Hablar con nosotros
              </Button>
            </Stack>
          </Grid>

          {/* Chat card */}
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: 380 }}>
              <ChatCard />
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{ mt: 8, pt: 5, borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {STATS.map((s, i) => (
            <Grid item xs={6} md={3} key={i} sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2.2rem',
                  color: '#64B5F6',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                {s.num}
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  mt: 0.5,
                }}
              >
                {s.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
