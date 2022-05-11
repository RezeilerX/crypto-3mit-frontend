import type { FunctionComponent } from 'react'
import type { ImgProps } from 'react-html-props'

import Img from 'components/atoms/tags/Img'

const HeaderLogo: FunctionComponent<ImgProps> = ({ style, ...rest }) => (
  <div className='header-logo' style={style}>
    <Img className='header-logo__img' {...rest} />
  </div>
)

export default HeaderLogo
