import type { CSSProperties } from 'react'

export default function EagleWatermark({ style }: { style?: CSSProperties }) {
  return (
    <div style={{ pointerEvents: 'none', ...style }}>
      <svg viewBox="0 0 258 268" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <path d="M154.544 0L103.071 89.1542H206.018L154.544 0Z" fill="white" />
        <path d="M205.989 89.1084L154.516 178.263H257.462L205.989 89.1084Z" fill="white" />
        <path d="M257.263 178.148L154.317 178.148L205.79 267.302L257.263 178.148Z" fill="white" />
        <path d="M154.361 178.217L102.888 267.371H205.834L154.361 178.217Z" fill="white" />
        <path d="M154.376 178.148L51.4294 178.148L102.903 267.302L154.376 178.148Z" fill="white" />
        <path d="M206.004 89.2227L103.057 89.2227L154.53 178.377L206.004 89.2227Z" fill="white" />
        <path d="M51.4731 178.217L-6.10352e-05 267.371H102.946L51.4731 178.217Z" fill="white" />
      </svg>
    </div>
  )
}
