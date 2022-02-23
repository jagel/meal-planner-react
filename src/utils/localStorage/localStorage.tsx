class LocalStorage {

    setLocalStorage = (key : string, value : string) => localStorage.setItem(key, value);

    getLocalStorage = (key : string) : string | null => localStorage.getItem(key);
}

export const LOC_SOTRAGE = {
    LANGUAGE : 'lang'
}

export const LocalStorageService = new LocalStorage();