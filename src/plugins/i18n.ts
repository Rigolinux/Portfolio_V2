import {createI18n} from 'vue-i18n'

export const i18n = createI18n({
    legacy: false,
    locale: 'es',
    messages: {
        en: {
        welcome: 'Welcome ',
        description_1: 'this is my portfolio of projects',
        description_2: 'My name is Bryan Portillo ',

        },
        es: {
        welcome: 'Bienvenido ',
        description_1: 'este es mi portafolio de proyectos',
        description_2: 'Mi nombre es Bryan Portillo ',
        }
    }
})