import { useState } from 'react'

interface useToggleProps {
  isActive: boolean
  toggle: () => void
}

const useToggle = (initialState = false): useToggleProps => {
  const [isActive, setActive] = useState(initialState)

  const toggle = () => {
    setActive(!isActive)
  }

  return {
    isActive,
    toggle
  }
}

export default useToggle
