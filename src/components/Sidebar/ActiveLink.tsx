import { cloneElement, ReactElement } from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'

interface ActiveLinkProps extends LinkProps {
  to: string
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export function ActiveLink({
  to,
  children,
  shouldMatchExactHref,
  ...rest
}: ActiveLinkProps) {
  const { pathname } = useLocation()

  let isActive = false

  if (shouldMatchExactHref && pathname === to) {
    isActive = true
  }

  if (!shouldMatchExactHref && pathname.startsWith(String(to))) {
    isActive = true
  }

  return (
    <Link to={to} {...rest}>
      {cloneElement(children, {
        color: isActive ? 'green.500' : 'gray.50',
      })}
    </Link>
  )
}
