import './assets/main.css'
import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import {
    AppBtn,
    AppCheckbox,
    AppErrorMessage,
    AppFlashMessage,
    AppInConstruction,
    AppInput,
    AppLabelSpan,
    AppLink,
    AppLoadingButton,
    AppPageHeader,
    AppPaginationA,
    AppPaginationB,
    AppPaginationC,
    AppPending,
    AppRadio,
    AppRadioGroup,
    AppSectionBorder,
    AppSectionInfo,  
    AppSelect,
    AppTextarea
  } from '@ecanquiz/vue-forms'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('AppBtn', AppBtn)
app.component('AppCheckbox', AppCheckbox)
app.component('AppErrorMessage', AppErrorMessage)
app.component('AppFlashMessage', AppFlashMessage)
app.component('AppLink', AppLink)   
app.component('AppInput', AppInput)
app.component('AppSelect', AppSelect)
app.component('AppTextarea', AppTextarea)
app.component('AppPending', AppPending)
app.component('AppPageHeader', AppPageHeader)
app.component('AppRadio', AppRadio)
app.component('AppRadioGroup', AppRadioGroup)
app.component('AppPaginationB', AppPaginationB)
app.component('DefaultLayout', defineAsyncComponent(() => import('@/layouts/DashboardLayout.vue')))
app.component('EmptyLayout', defineAsyncComponent(() => import('@/layouts/EmptyLayout.vue')))

app.mount('#app')
