export const Icons = {
    // A
    account_circle: 'account_circle',
    add: 'add',
    add_circle: 'add_circle',
    arrow_upward:'arrow_upward',
    arrow_downward:'arrow_downward',
    // C
    check:'check',
    calendar_add_on:'calendar_add_on',//no workging
    calendar_month:'calendar_month',
    calendar_today:'calendar_today',
    // D
    delete:'delete',
    // E
    edit:'edit',
    edit_calendar:'edit_calendar',
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
    // R
    restaurant:'restaurant',
    // S
    search: 'search',
    settings: 'settings',
    share: 'share',
    // U
    undo: 'undo',
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