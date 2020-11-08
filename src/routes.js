import { Basics } from './components/pages'
import { Redirect } from 'react-router-dom'

const routes = [
    {
        path: '/',
        component: () => <Redirect to="/basics" />
    },
    {
        path: '/basics',
        component: Basics
    },
    {
        path: '/**',
        component: () => <Redirect to="/" />
    }
]

export default routes