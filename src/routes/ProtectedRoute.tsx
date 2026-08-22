import { useNavigate, Navigate } from 'react-router-dom'

export function ProtectedRoute() {
  const navigate = useNavigate()

  return <Navigate to='/login' replace />}