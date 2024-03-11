import {createI18n} from 'vue-i18n'

export const i18n = createI18n({
    legacy: false,
    locale: 'es',
    messages: {
        en: {
            welcome: 'Welcome ',
            Config_Page: 'Config Page ',
            description_1: 'Software Engineer',
            description_2: 'my name is',
            Rigo:'Rigoberto',
            Spanish: 'Spanish',
            English: 'English',
            Save: 'Save',
            Language: 'Language',
            Text_Color: 'Text Color',
            Navigation: 'Navigation',
            SoftEng: 'Software Engineer',
            description_3: 'I design and code beautifully simple things and i love what i do. Just simple like that!',
            years_experience: 'Years of experience',
            completed_projects: 'Completed Projects',
        },
        es: {
            welcome: 'Bienvenido ',
            description_1: 'Software Engineer',
            description_2: 'mi nombre is ',
            Rigo:'Rigoberto',
            Config_Page: 'Configuracion de pagina ',
            Spanish: 'Español',
            English: 'Ingles',
            Save: 'Guardar',
            Language: 'Idioma',
            Text_Color: 'Color de Texto',
            Navigation: 'Navegacion',
            SoftEng: 'Ingeniero de Software',
            description_3: 'Diseño y codifico cosas simples y me encanta cunado lo hago. ¡Asi de simple!',
            years_experience: 'Años de experiencia',
        }
    }
})