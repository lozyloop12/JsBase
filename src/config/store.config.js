import AsyncStorage from '@react-native-community/async-storage';

const StorageKey = {
    OAUTH_TOKEN: '@OAUTH_TOKEN',
    CURRENT_USER: '@CURRENT_USER',
    FCM_TOKEN: '@FCM_TOKEN',
    AREA_DATA: '@AREA_DATA',
    LANGUAGE: '@LANGUAGE',
};

let token;
export const getOAuthToken = async () => {
    if (token) {
        return token;
    }
    try {
        token = await AsyncStorage.getItem(StorageKey.OAUTH_TOKEN);
        // eslint-disable-next-line no-empty
    } catch (e) {}
    return token;
};

export const setOAuthToken = async token => {
    try {
        await AsyncStorage.setItem(StorageKey.OAUTH_TOKEN, token);
        // eslint-disable-next-line no-empty
    } catch (e) {}
};

export const removeOAuthToken = async () => {
    try {
        await AsyncStorage.removeItem(StorageKey.OAUTH_TOKEN);
        // eslint-disable-next-line no-empty
    } catch (e) {}
    token = null;
};

export const getLanguage = async () => {
    try {
        return await AsyncStorage.getItem(StorageKey.LANGUAGE);
        // eslint-disable-next-line no-empty
    } catch (e) {}
    return null;
};

export const setLanguage = async key => {
    try {
        await AsyncStorage.setItem(StorageKey.LANGUAGE, key);
        // eslint-disable-next-line no-empty
    } catch (e) {}
};

export const getCurrentUser = async () => {
    try {
        return await AsyncStorage.getItem(StorageKey.CURRENT_USER);
    } catch (e) {}
    return null;
};

export const setCurrentUser = async user => {
    try {
        await AsyncStorage.setItem(StorageKey.CURRENT_USER, user)
    } catch (e) {}
};

export const removeCurrentUser = async () => {
    try {
        await AsyncStorage.removeItem(StorageKey.CURRENT_USER);
        // eslint-disable-next-line no-empty
    } catch (e) {}
};