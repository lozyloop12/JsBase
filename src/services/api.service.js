import axios from "axios";
import qs from "qs";
import Toast from "../components/elements/Toast";

import { getOAuthToken, removeOAuthToken } from "../config/store.config";
import { multiLanguage } from "../config/strings/I18n";
import { resetPageWithoutNavigator, Screen } from "../constants";

export const Host = "https://icf-api.volcanly.me";
export const BaseURL = `${Host}/api/v1/`; // Develop
export const BaseSocket = "ws://icf-sk.volcanly.me:3000";
export const BaseCrawl = "http://3.124.188.132:3000"

axios.defaults.baseURL = `${BaseURL}`;
axios.defaults.timeout = 20000;

const handleError = (error) => {
    const { response } = error || {};
    console.log('res: ', response);
    if (response) {
        const { status, data } = response;
        const { error } = data || 0
        if (status === 401 && error == 9 || status === 401 && error == 10) {
            // removeOAuthToken();
            // Toast(`${multiLanguage(`Error.token_expired`)}`, "error");
            // resetPageWithoutNavigator(Screen.SIGNIN)
        }
        return data;
    }

    return error;
};

const preprocessResponse = (result) => {
    const { message, data } = result || {};
    if (message === "success") {
        return data;
    }
    return result;
};

export default class RequestHelper {
    static async getHeader() {
        const token = (await getOAuthToken()) || {};
        return {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
        };
    }

    static async getHeaderUploadFile() {
        const { token } = (await getOAuthToken()) || {};
        return {
            "Content-Type": "multipart/form-data",
            Authorization: token,
        };
    }

    static async getUserInfoFromFacebook(token) {
        return axios
            .get(
                `https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=${token}`
            )
            .then((data) => {
                return data.data;
            })
            .catch((e) => {
                throw e;
            });
    }

    static async get(url, params) {
        const header = await this.getHeader();
        return axios
            .get(url, {
                headers: header,
                params,
                paramsSerializer: (params) => {
                    return qs.stringify(params, { arrayFormat: "repeat" });
                },
            })
            .then((data) => {
                return data.data;
            })
            .then((data) => {
                return preprocessResponse(data);
            })
            .catch((e) => {
                throw handleError(e);
            });
    }

    static async post(url, data) {
        return axios({
            method: "post",
            url,
            headers: await this.getHeader(),
            data,
        })
            .then((data) => {
                return data.data;
            })
            .then((data) => {
                return preprocessResponse(data);
            })
            .catch((e) => {
                throw handleError(e);
            });
    }

    static async put(apiUrl, data) {
        return axios({
            method: "put",
            url: apiUrl,
            headers: await this.getHeader(),
            data,
        })
            .then((data) => {
                return data.data;
            })
            .then((data) => {
                return preprocessResponse(data);
            })
            .catch((e) => {
                throw handleError(e);
            });
    }

    static getBlob = async (fileUri) => {
        const resp = await fetch(fileUri);
        const imageBody = await resp.blob();
        return imageBody;
    };

    static uploadFile = async (file, signedRequest) => {
        const imageBody = await RequestHelper.getBlob(file);
        let response = fetch(`${signedRequest}`, {
            method: "PUT",
            body: imageBody,
        })
            .then((data) => {
                return data;
            })
            .catch((e) => {
                throw handleError(e);
            });
        return response;
    };

    static async delete(apiUrl, data) {
        return axios({
            method: "delete",
            url: apiUrl,
            headers: await this.getHeader(),
            data,
        })
            .then((data) => {
                return data.data;
            })
            .then((data) => {
                return preprocessResponse(data);
            })
            .catch((e) => {
                throw handleError(e);
            });
    }

    static async getArticleByUrl(data) {
        return axios({
            method: "post",
            url: `${BaseCrawl}/scraping`,
            data,
        })
            .then((data) => {
                return data.data;
            })
            .then((data) => {
                return preprocessResponse(data);
            })
            .catch((e) => {
                throw handleError(e);
            });
    };
}
