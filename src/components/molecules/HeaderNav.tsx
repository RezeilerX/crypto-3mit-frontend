import type { FunctionComponent } from 'react'
import type { ElementProps } from 'react-html-props'
import type { HeaderMenuItem } from 'types'
import HeaderMenu from 'components/molecules/HeaderMenu'

interface HeaderNavProps extends ElementProps {
  items: HeaderMenuItem[]
  menuProps?: ElementProps
}

const HeaderNav: FunctionComponent<HeaderNavProps> = ({ items = [], menuProps, ...restProps }) => (
  <nav className="header-nav" {...restProps}>
    <HeaderMenu items={items} {...menuProps}/>
  </nav>
)

export default HeaderNav
