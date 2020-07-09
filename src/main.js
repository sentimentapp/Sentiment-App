import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Imports custom styles
import '@/styles/styles.css'

Vue.config.productionTip = false

// Imports data initilzation function to be run at app start
import { dataInitialization } from "@/components/capacitor_storage.js"

// Waits for the dataIntialization promise to return
dataInitialization().then(result =>{
  console.log(result)
  // If a value is gotten, load the application
  if(result){
    new Vue({
      // Pushes data from the returned object into global variables
      data: {
        entries: result["entries"],
        settings: result["settings"]
      },
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})

