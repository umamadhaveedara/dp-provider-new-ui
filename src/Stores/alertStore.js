
import { writable } from 'svelte/store';

export const alert = writable({
    message: '',
    visible: false,
    type: '',
  });
  export const clearAlert = () => alert.update((current) => ({ ...current, message: '', visible: false }));
  /**
 * @param {string} message
 * @param {string} type
 */
  export function showAlerts(message, type) {
    alert.update((current) => ({ ...current, message, type, visible: true }));
    setTimeout(() => clearAlert(), 5000);
  }