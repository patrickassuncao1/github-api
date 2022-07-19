import { CardType } from "../../components/Card"
import { GitHubUserType } from "../model/user"

export type GitHubContextType = {
    user?: GitHubUserType,
    repositories?: CardType[],
    starred?: CardType[],
    isSearch: boolean,
    getUser: (username: string) => Promise<void>,
    getUserRepos: (username: string) => Promise<void>,
    getUserStarred : (username: string) => Promise<void>
}

export type GitHubUserStateType = {
    isSearch: boolean,
    user?: GitHubUserType,
    repositories?: [],
    starred?: [],
}