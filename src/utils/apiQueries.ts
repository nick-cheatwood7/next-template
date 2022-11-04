import apiClient from "./http-common";

export const sayHello = async () => {
    const result = await apiClient.get("/hello");
    return result.data;
};

export const getAbout = async () => {
    const result = await apiClient.get("/about");
    return result.data;
};
