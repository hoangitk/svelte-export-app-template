import { writable, derived, get } from 'svelte/store'

export const state = writable({})

export function getState() {
    return get(intakeForm)
}