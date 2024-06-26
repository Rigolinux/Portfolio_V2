import { defineStore } from "pinia"
import { ref} from "vue"
import type { Ref } from "vue"


interface ConfigOptions {
    textColor: string;
    locale: string;
    Theme: string;
}

export const useConfigStore = defineStore('ConfigDialog', () => {
    const textColor: Ref<string> = ref('#28e98c');
    const configDialog: Ref<boolean> = ref(false);
    const Locale = ref<string>('');
    const Theme = ref<string>('Light');
    const setCurretOptions = (): void => {
        const preSets:ConfigOptions = JSON.parse(localStorage.getItem('configOptions') || '{}');

        if (preSets.textColor) {
            textColor.value = preSets.textColor;
        }
        if (preSets.locale) {
            Locale.value = preSets.locale;
         
        }
        if (preSets.Theme) {
            Theme.value = preSets.Theme;
        }
    };

    const setLocale = (locale: string): void => {
        const preSets:ConfigOptions = JSON.parse(localStorage.getItem('configOptions') || '{}');
        Locale.value = locale;
        preSets.locale = locale;
    };

    const setTheme = (theme: string): void => {
        Theme.value = theme;
        const preSets:ConfigOptions = JSON.parse(localStorage.getItem('configOptions') || '{}');
        preSets.Theme = theme;
        localStorage.setItem('configOptions', JSON.stringify(preSets));
        document.documentElement.style.setProperty('--bg-color', theme == 'Dark' ? 'rgb(17 24 39)' : '#ffff');

        
    };
    const getAllOptions = (): ConfigOptions => {
        const preSets:ConfigOptions = JSON.parse(localStorage.getItem('configOptions') || '{}');

        return preSets;
    
    }

    const handleConfigDialog = (): void => {
        configDialog.value = !configDialog.value;
    };

    const saveOptions = (): void => {
        const options = {
            textColor: textColor.value,
            locale: Locale.value,
            Theme: Theme.value,
        };

        localStorage.setItem('configOptions', JSON.stringify(options));
    }

    const getCurrentColorTxt = (): string => {
        return Theme.value === 'Dark' ? 'color :white' : 'color :black';
    };

    const getCurrentColorBg = (): string => {
        return Theme.value === 'Dark' ? 'background-color :black' : 'background-color :white';
    }

    const getInvertedColor = (): string => {

        return Theme.value === 'Dark' ? 'white' : 'black';
    }

    return { 
                textColor, 
                Theme, 
                Locale, 
                configDialog, 
                setCurretOptions, 
                setTheme,
                setLocale,
                getAllOptions,
                getCurrentColorTxt,
                getCurrentColorBg, 
                getInvertedColor,
                saveOptions, 
                handleConfigDialog, 
            }
})
