import { defineStore } from "pinia"
import { ref} from "vue"
import type { Ref } from "vue"

interface ConfigOptions {
    textColor: string;
}


export const useConfigStore = defineStore('ConfigDialog', () => {
    const textColor: Ref<string> = ref('#28e98c');
    const configDialog: Ref<boolean> = ref(false);

    const setCurretOptions = (): void => {
        const preSets:ConfigOptions = JSON.parse(localStorage.getItem('configOptions') || '{}');

        if (preSets) {
            textColor.value = preSets.textColor;
        }
    };

    const getAllOptions = (): ConfigOptions => {
        const preSets:ConfigOptions = JSON.parse(localStorage.getItem('configOptions') || '{}');

        return preSets;
    
    }

    const handleConfigDialog = (): void => {
        configDialog.value = !configDialog.value;
    };

    const saveOptions = (options: ConfigOptions): void => {
        localStorage.setItem('configOptions', JSON.stringify(options));
    }

    return { textColor, setCurretOptions, getAllOptions, saveOptions, configDialog, handleConfigDialog}
})
