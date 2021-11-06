// Vue Ripple Components
Vue.use(VueTouchRipple, {
	speed: 1,
  color: '#000',
  opacity: 0.2
})
Vue.component('cbtn', {
  props: ['itemprop'],
  template: '<touch-ripple :speed="1.5" color="#fff" class="btn"><button class="contained">{{itemprop}}</button></touch-ripple>'
})
Vue.component('tbtn', {
  props: ['itemprop'],
  template: '<touch-ripple :speed="1.5" color="#0064ff" class="btn"><button class="">{{itemprop}}</button></touch-ripple>'
})
new Vue({
  el: '#app',
  data: {
    // Can be used as inner html component
  },
})