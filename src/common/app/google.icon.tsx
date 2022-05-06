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
    // H
    home:'home',
    // I
    inbox:'inbox',
    // K
    keyboard_arrow_down:'keyboard_arrow_down',
    keyboard_arrow_up:'keyboard_arrow_up',
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
    settings: 'settings',
    share: 'share',
    // V
    visibility_off : 'visibility_off',
    visibility: 'visibility',
}

export interface GoogleIconsInheritanceProps {
    iconName:string; 
    className?:string;
}
export const GoogleIconsInheritance = (props:GoogleIconsInheritanceProps) =>
    <span className={`${props.className} material-icons`}>{props.iconName}</span>


export interface GoogleIconCompositionProps extends GoogleIconsInheritanceProps {
    children : React.ReactNode;
}
export const GoogleIconComposition = (props : GoogleIconCompositionProps) =>
    <span className={`${props.className} material-icons`}>{props.iconName}{props.children}</span>

