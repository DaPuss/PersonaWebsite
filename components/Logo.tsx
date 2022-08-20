import * as React from 'react'

const Logo = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={1080}
        height={1080}
        xmlSpace="preserve"
        transform=""
        {...props}
    >
        <path
            style={{
                stroke: '#000',
                strokeWidth: 5,
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeDashoffset: 0,
                strokeLinejoin: 'miter',
                strokeMiterlimit: 4,
                fill: '#656565',
                fillRule: 'nonzero',
                opacity: 1,
            }}
            vectorEffect="non-scaling-stroke"
            transform="matrix(5.04 0 0 5.04 287.59 287.59)"
            d="M50 92.875C26.358 92.875 7.125 73.642 7.125 50S26.358 7.125 50 7.125 92.875 26.358 92.875 50 73.642 92.875 50 92.875zm0-83.75C27.461 9.125 9.125 27.461 9.125 50c0 22.538 18.336 40.875 40.875 40.875 22.538 0 40.875-18.337 40.875-40.875C90.875 27.461 72.538 9.125 50 9.125z"
            strokeLinecap="round"
        />
        <g
            transform="matrix(1.22 0 0 1.22 540 540)"
            style={{
                filter: 'url(#a)',
            }}
        >
            <filter id="a" y="-24%" height="148%" x="-21%" width="142%">
                <feGaussianBlur in="SourceAlpha" />
                <feOffset dx={8} dy={8} result="oBlur" />
                <feFlood floodColor="#616060" floodOpacity={1} />
                <feComposite in2="oBlur" operator="in" />
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <text
                xmlSpace="preserve"
                fontFamily="Raleway"
                fontSize={192}
                fontWeight={900}
                style={{
                    stroke: 'none',
                    strokeWidth: 1,
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeDashoffset: 0,
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: 4,
                    fill: '#000',
                    fillRule: 'nonzero',
                    opacity: 1,
                    whiteSpace: 'pre',
                }}
            >
                <tspan x={-122.78} y={60.31}>
                    {'DF'}
                </tspan>
            </text>
        </g>
    </svg>
)

export default Logo
