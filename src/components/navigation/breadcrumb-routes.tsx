import { Link, useLocation } from "react-router-dom";
import { SetLanguageText } from "../../services/i18n/languageManager";

export const BreadcrumbRoutes = (props : {
    currenRoute:string,
    dynamicParams?:string[],
    }) => {

    const textValue = SetLanguageText;
    let location = useLocation();
    let pathname = location.pathname;

    if(props.dynamicParams?.length??0 > 0){
        props.dynamicParams?.forEach(param => pathname = pathname.replace(param,''))
    }

    let pathItems = pathname.split('/');
    pathItems[0] = 'home'
    return <div>
            
        </div>
}

/*
<h1>{textValue(props.currenRoute)}</h1>
            <Breadcrumb>
                {pathItems.map((item,index) => 
                    <Breadcrumb.Item key={item} linkAs={Link} linkProps={{ to: "/" }}>
                    {item}
                    </Breadcrumb.Item>)
                }         
            </Breadcrumb>
 */