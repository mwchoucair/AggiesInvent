// file to put the functional app
Vue.component('home_page', {
    template: `<div class="home_page">
                    <h class="hp_header">Secure Colab</h>
                    <a class="hp_desc">One stop for Efficient NSA Security Communications</a>
                </div>`
    }
)





var app = new Vue({
    el: '#app',
    data: {
        home_page: true,
        task_page: false,
        assessment_job_page: false,
        groups_page: false,
        alert_page: false,
    }
})