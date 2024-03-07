import {createI18n} from 'vue-i18n'

export const i18n = createI18n({
    legacy: false,
    locale: 'es',
    messages: {
        en: {
            welcome: 'Welcome ',
            Config_Page: 'Config Page ',
            description_1: 'this is my portfolio of projects',
            description_2: 'My name is Bryan Portillo ',
            Spanish: 'Spanish',
            English: 'English',
            Save: 'Save',
            Language: 'Language',
            Text_Color: 'Text Color',
            Navigation: 'Navigation',
            SoftEng: 'Software Engineer',
        },
        es: {
            welcome: 'Bienvenido ',
            description_1: 'este es mi portafolio de proyectos',
            description_2: 'Mi nombre es Bryan Portillo ',
            Config_Page: 'Configuracion de pagina ',
            Spanish: 'Español',
            English: 'Ingles',
            Save: 'Guardar',
            Language: 'Idioma',
            Text_Color: 'Color de Texto',
            Navigation: 'Navegacion',
            SoftEng: 'Ingeniero de Software',
        }
    }
})