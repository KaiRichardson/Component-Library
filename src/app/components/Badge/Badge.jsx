import React from "react"
import classnames from "classnames"

export default function Badge({ children, color, size, variant, ...rest }) {
    let variantClass = variant && `badge-${variant}`
    let sizeClass = size && `badge-${size}`
    let colorClass = variant && `badge-${color}`
    const allClasses = classnames('badge', sizeClass, variantClass, colorClass)

    return (
        <span className={allClasses} {...rest}>
            {children}
        </span>
    )
}