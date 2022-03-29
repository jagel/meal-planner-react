export const Icons = {
    mail : 'mail',
    visibility_off : 'visibility_off',
    visibility: 'visibility',
    account_circle: 'account_circle',
    language:'language',
    menu: 'menu',
}

export const GoogleIconsInheritance = (props:{iconName:string}) =>
    <span className="lng-icon material-icons">{props.iconName}</span>

export const GoogleIconComposition = (props : {iconName:string, children : React.ReactNode}) =>
  <span className="lng-icon material-icons">{props.iconName}{props.children}</span>
