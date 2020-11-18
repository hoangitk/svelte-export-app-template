import App from './App.svelte'
import { state, getState } from './store'
import { locale, translations, getBrowserLocale } from 'svelte-intl';

export default {
    App,
    Store: {
        state,
        getState
    },
    i18n: { locale, translations, getBrowserLocale }
}