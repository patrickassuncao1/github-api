import { api } from "../../conf/api"

export const findUser = async (username: string) => {
    const response = await api.get('/users/' + username);
    const data = response.data;
    return data;
}

export const userRepos = async (username: string) => {
    const response = await api.get('/users/' + username + '/repos');
    const data = response.data;
    return data;
}

export const userReposStarred = async (username: string) => {
    const response = await api.get('/users/' + username + '/starred');
    const data = response.data;
    return data;
}