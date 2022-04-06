export const Icons = {
    // A
    account_circle: 'account_circle',
    arrow_upward:'arrow_upward',
    arrow_downward:'arrow_downward',
    // C
    check:'check',
    // D
    delete:'delete',
    // E
    edit:'edit',
    // F
    favorite:'favorite',
    // K
    keyboard_arrow_down:'keyboard_arrow_down',
    // L
    language:'language',
    // M
    mail : 'mail',
    menu: 'menu',
    morevert:'more_vert',
    // N
    notifications:'notifications',
    // S
    search: 'search',
    share: 'share',
    // V
    visibility_off : 'visibility_off',
    visibility: 'visibility',
}

export const GoogleIconsInheritance = (props:{iconName:string, className?:string}) =>{
    let className = `${props.className} material-icons`;
    return <span className={className}>{props.iconName}</span>
}

export const GoogleIconComposition = (props : {iconName:string, className?:string, children : React.ReactNode}) =>{
    let className = `${props.className} material-icons`;
    return <span className={className}>{props.iconName}{props.children}</span>
}
