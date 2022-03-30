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

export const GoogleIconsInheritance = (props:{iconName:string}) =>
    <span className="material-icons">{props.iconName}</span>

export const GoogleIconComposition = (props : {iconName:string, children : React.ReactNode}) =>
  <span className="material-icons">{props.iconName}{props.children}</span>
