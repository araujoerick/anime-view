import React from 'react'

const Button = ({
  variant = 'primary',
  icon,
  iconSize = '24',
  children,
  type,
  ...props
}) => {
  const baseStyles =
    'flex items-center gap-3 px-6 py-3 rounded text-white uppercase'
  const variantStyles = {
    primary: 'bg-orange-600 hover:bg-orange-500',
    secondary: 'bg-neutral-300 text-neutral-800 hover:bg-neutral-100',
  }

  const classes = `${baseStyles} ${variantStyles[variant]}`

  return (
    <button type={type} className={classes} {...props}>
      {icon && (
        <img
          className={`h-[${iconSize}px] w-[${iconSize}]px`}
          src={icon}
          alt=""
        />
      )}
      {children}
    </button>
  )
}

export default Button
