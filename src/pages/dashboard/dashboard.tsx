import { BreadcrumbRoutes } from '../../components/navigation/breadcrumb-routes'
import './dashboard.css'

export default function Dashboard(){

    return <>
        <BreadcrumbRoutes />

        <h1 className='dashboard-main'>Dashboard</h1>
    </>
}