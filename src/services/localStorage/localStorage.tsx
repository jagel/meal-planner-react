class LocalStorage {

    setLocalStorage = (key : string, value : string) =>{
        this.removeLocalStorage(key);
        localStorage.setItem(key, value);
    } 

    getLocalStorage = (key : string) : string | null => localStorage.getItem(key);

    removeLocalStorage = (key : string) : void => localStorage.removeItem(key);
}

export const LOC_SOTRAGE = {
    LANGUAGE : 'lang',
    USER_TOKEN : 'user',
}

export const localStorageService = new LocalStorage();