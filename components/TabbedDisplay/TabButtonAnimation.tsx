import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'

interface Props {
    currentIndex: number
    getDimensions: () => { width: number; height: number }
}
const TabButtonAnimation = ({ currentIndex, getDimensions }: Props) => {
    const { width, height } = getDimensions()
    const isWide = useMediaQuery('md')

    const position = currentIndex * (isWide ? height : width)
    const translation = isWide ? 'translateY' : 'translateX'
    return (
        <div
            className={`absolute bg-primaryHighlight`}
            style={{
                transform: `${translation}(${position}px)`,
                transition:
                    'transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s',
                height: isWide ? height : '3px',
                width: isWide ? '3px' : width,
                top: isWide ? 0 : 'auto',
                bottom: isWide ? 'auto' : 0,
            }}
        ></div>
    )
}

export default TabButtonAnimation
