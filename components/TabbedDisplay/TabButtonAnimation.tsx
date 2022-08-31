import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'

interface Props {
    currentIndex: number
}
const TabButtonAnimation = ({ currentIndex }: Props) => {
    const isWide = useMediaQuery('md')
    const tabHeight = 51
    const tabWidth = 150
    const position = currentIndex * (isWide ? tabHeight : tabWidth)
    const translation = isWide ? 'translateY' : 'translateX'
    return (
        <div
            className={`absolute bg-primaryHighlight`}
            style={{
                transform: `${translation}(${position}px)`,
                transition:
                    'transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s',
                height: isWide ? tabHeight : '3px',
                width: isWide ? '3px' : tabWidth,
                top: isWide ? 0 : 'auto',
                bottom: isWide ? 'auto' : 0,
            }}
        ></div>
    )
}

export default TabButtonAnimation
