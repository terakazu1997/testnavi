Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path: '/',
            name:'questionSample1',
            component:questionSample1
        },
        {
            path:'/question-sample2',
            name:'questionSample2',
            component: questionSample2
        },
        {
            path:'/answer-sample1',
            name:'answerSample1',
            component: answerSample1
        },
    ]
})