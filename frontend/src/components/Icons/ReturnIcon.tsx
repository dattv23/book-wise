import { Icon } from '@/types'

export const ReturnIcon: React.FC<Icon> = ({ width = 24, height = 24, color = '#0000', className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Icon-return' clipPath='url(#clip0_261_4864)'>
        <path
          id='Vector'
          d='M33.3333 18.3334C32.9257 15.4004 31.5651 12.6828 29.4611 10.5992C27.357 8.51557 24.6263 7.18155 21.6894 6.80261C18.7526 6.42366 15.7727 7.02082 13.2087 8.5021C10.6446 9.98337 8.63874 12.2666 7.49999 15M6.66666 8.33335V15H13.3333'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          id='Vector_2'
          d='M6.66666 21.6667C7.07426 24.5997 8.43488 27.3173 10.5389 29.4009C12.643 31.4845 15.3737 32.8185 18.3105 33.1974C21.2473 33.5764 24.2273 32.9792 26.7913 31.4979C29.3554 30.0167 31.3612 27.7335 32.5 25M33.3333 31.6667V25H26.6667'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_261_4864'>
          <rect width='40' height='40' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
