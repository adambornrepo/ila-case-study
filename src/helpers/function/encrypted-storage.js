import { EncryptStorage } from 'encrypt-storage';
const encryptedLocalStorage = new EncryptStorage(process.env.REACT_APP_STORAGE_ENCRYPTION_KEY);

export const setToLocalStorage = (key, value) => {
    encryptedLocalStorage.setItem(key, value);
}
export const getFromLocalStorage = (key) => {
    return encryptedLocalStorage.getItem(key);
}
export const removeFromLocalStorage = (key) => {
    encryptedLocalStorage.removeItem(key);
}