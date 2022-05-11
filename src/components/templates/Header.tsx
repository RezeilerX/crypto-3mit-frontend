import type { FunctionComponent } from 'react'
import type { ElementProps } from 'react-html-props'
import type { HeaderMenuItem } from 'types'
import HeaderLogo from 'components/molecules/HeaderLogo'
import HeaderNav from 'components/molecules/HeaderNav'

import logoUrl from 'assets/img/3mit-logo.svg'

const headerMenuItems: HeaderMenuItem[] = [
  {
    label: 'Inicio',
    to: '/'
  },{
    label: 'Portfolio',
    to: '/portfolio'
  }
]

const Header: FunctionComponent<ElementProps> = props => (
  <header className='header' {...props}>
    <HeaderLogo src={logoUrl} alt='Logo de 3MIT' />

    <HeaderNav items={headerMenuItems} />
  </header>
)

export default Header
