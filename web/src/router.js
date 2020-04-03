import Vue from 'vue'
import Router from 'vue-router'

//Import components
import Dash from "./components/dash"
import FilesTreatment from "./components/filesTreatment"

Vue.use(Router)

var router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: {name: 'dash'}
        },
        {
            path: '/dash',
            name: 'dash',
            redirect:{name:'filesTreatment'},
            component: Dash,
            children: [
                {
                    path: '/filesTreatment',
                    name: 'filesTreatment',
                    component: FilesTreatment
                }
            ]
        }
    ]
})

export default router;