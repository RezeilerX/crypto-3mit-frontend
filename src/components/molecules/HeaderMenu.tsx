import type { FunctionComponent } from 'react'
import type { ElementPropsWithoutRef } from 'react-html-props'
import type { HeaderMenuItem } from 'types'
import { Link } from 'react-router-dom'
import { isEmpty } from 'lodash'

interface HeaderMenuProps extends ElementPropsWithoutRef {
  items: HeaderMenuItem[]
}

const HeaderMenu: FunctionComponent<HeaderMenuProps> = ({ items, ...props }) => (
  <ul className="header-menu" {...props}>
    {
      !isEmpty(items) && items.map(item => (
        <li className='header-menu__item' key={item.to}>
          <Link className='header-menu__link' to={item.to}>
            {item.label}
          </Link>
        </li>
      ))
    }
  </ul>
)

export default HeaderMenu
