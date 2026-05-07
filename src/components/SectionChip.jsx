import React from 'react'
import { Box } from '@mui/material'

/**
 * Small labeled chip used at the top of each section.
 * Props:
 *  - icon: material icon name (string) — optional
 *  - light: if true uses blue-on-dark palette; otherwise uses blue-on-white
 *  - children: label text
 */
export default function SectionChip({ icon, light = false, children }) {
  const bg     = light ? 'rgba(25,118,210,0.12)'  : 'rgba(25,118,210,0.08)'
  const border = light ? 'rgba(25,118,210,0.3)'   : 'rgba(25,118,210,0.2)'
  const color  = light ? '#64B5F6'                : '#1976D2'

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        background: bg,
        border: `1px solid ${border}`,
        color,
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        px: '14px',
        py: '6px',
        borderRadius: '100px',
        mb: 2.5,
      }}
    >
      {icon && (
        <span className="material-icons" style={{ fontSize: 13 }}>
          {icon}
        </span>
      )}
      {children}
    </Box>
  )
}
