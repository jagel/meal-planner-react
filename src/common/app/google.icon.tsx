export const Icons = {
    mail : 'mail',
    visibility_off : 'visibility_off',
    visibility: 'visibility',
    account_circle: 'account_circle',
    language:'language',
    menu: 'menu',
    search: 'search',
    notifications:'notifications',
    morevert:'more_vert'
}

export const GoogleIconsInheritance = (props:{iconName:string, className?:string}) =>{
    let className = `${props.className} material-icons`;
    return <span className={className}>{props.iconName}</span>
}

export const GoogleIconComposition = (props : {iconName:string, className?:string, children : React.ReactNode}) =>{
    let className = `${props.className} material-icons`;
    return <span className={className}>{props.iconName}{props.children}</span>
}
