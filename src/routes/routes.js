import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Tasks from '../pages/Tasks';
import Events from '../pages/Events';

import IconDashboard from '../assets/img/icon-dashboard-menu.png';
import IconTask from '../assets/img/icon-tasks.png';
import IconCalendar from '../assets/img/icon-calendar.png';

export const pages = [
    {
        name: 'Dashboard',
        path: '/',
        component: Dashboard,
        icon: IconDashboard,
    },
    {
        name: 'Tasks',
        path: '/tasks',
        component: Tasks,
        icon: IconTask,
    },
    {
        name: 'Events',
        path: '/events',
        component: Events,
        icon: IconCalendar,
    }
];

const Routes = () => {
    return (
        <Switch>
            { pages &&
                pages.map(item => {
                return (
                    <Route 
                        key={item.path} 
                        component={item.component} 
                        path={item.path} 
                        location={{ state: {name: item.name, icon: item.icon }}}
                        exact
                    />
                )
            })

            }
        </Switch>
    )

}

export default Routes;