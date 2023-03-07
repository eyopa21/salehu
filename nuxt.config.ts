// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

 
        modules: [
          '@nuxtjs/tailwindcss'
        ],
        app: {
            head: {
              meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
                
              ],
              script: [
                // <script src="https://myawesome-lib.js"></script>
                //{ src: '/js/swiper-bundle.min.js',body: true },
                //{ src: '/js/vanilla-counter.js' ,body: true},
                //{ src: '/js/aos.js' ,body: true },
               //{ src: '/js/custom.js' ,body: true },
                { src: '/js/app.js' ,body: true },
                //{ src: '/jss/plugins.init.js' ,body: true },
                //{ src: '/jss/easy_background.js' ,body: true },
                //{ src: '@/assets/libs/tiny-slider/min/tiny-slider.js' ,body: true },
                //{ src: '@/assets/libs/feather-icons.min.js' ,body: true },
                //{ src: '/js/accordion.min.js' ,body: true },
                //{ src: '/js/apexcharts.js' ,body: true },
                //{ src: '/js/fancybox.umd.js' ,body: true }
    
              ],
              link: [
                // <link rel="stylesheet" href="https://myawesome-lib.css">
                //{ rel: 'stylesheet', href: '@/assets/css/tailwind.css' },
                { rel: 'stylesheet', href: '/css/icons.css' },
                //{ rel: 'stylesheet', href: '@/assets/css/fancybox.css' },
                //{ rel: 'stylesheet', href: '@/assets/css/swiper-bundle.min.css' },
               // { rel: 'stylesheet', href: '@/assets/css/accordion.min.css' },
                //{ rel: 'stylesheet', href: '@/assets/css/style.css' },
               // { href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700;800&amp;display=swap', rel: 'stylesheet'}
              ],
              // please note that this is an area that is likely to change
              noscript: [
                // <noscript>JavaScript is required</noscript>
                { children: 'JavaScript is required' }
              ]
            }
          }
          
      
})
