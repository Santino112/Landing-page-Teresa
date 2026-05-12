import React from 'react'
import { AppBar, Toolbar, Button, Typography, Stack, Box } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import TeresaiLogo from "../assets/images/logo_teresAI.svg";


const NAV_LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Teresa', href: '#teresa' },
]

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: 'rgba(10,22,40,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 6 }, py: 0.5, justifyContent: 'space-between' }}>
        <Box
          component="img"
          src={TeresaiLogo}
          alt="TERESAI Logo"
          sx={{
            height: "65px",
            width: "auto",
          }}
        />
        <Stack direction="row" spacing={1} alignItems="center">
          {NAV_LINKS.map((l) => (
            <Button
              key={l.label}
              href={l.href}
              sx={{
                color: 'rgb(255, 255, 255)',
                fontWeight: 400,
                fontSize: '0.875rem',
                '&:hover': { color: '#fff', background: 'transparent' },
              }}
            >
              {l.label}
            </Button>
          ))}
          <Button
            href="https://teresai-front-production.up.railway.app/"
            variant="contained"
            size="small"
            sx={{
              ml: 1,
              background: '#1976D2',
              borderRadius: '100px',
              px: 2.5,
              '&:hover': { background: '#1565C0' },
            }}
          >
            Ingresar
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
