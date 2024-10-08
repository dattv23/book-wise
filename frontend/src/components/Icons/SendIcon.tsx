import { Icon } from '@/types'

export const SendIcon: React.FC<Icon> = ({ width = 24, height = 24, color = '#0000', className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='icon-send'>
        <path
          id='Vector'
          d='M9.91199 12H3.99999L2.02299 4.13499C2.01033 4.08928 2.00262 4.04234 1.99999 3.99499C1.97799 3.27399 2.77199 2.77399 3.45999 3.10399L22 12L3.45999 20.896C2.77999 21.223 1.99599 20.737 1.99999 20.029C2.00201 19.9657 2.01313 19.9031 2.03299 19.843L3.49999 15'
          stroke='black'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}
