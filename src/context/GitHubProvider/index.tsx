import React, { createContext, ReactNode, useCallback, useState } from 'react';
import { GitHubContextType, GitHubUserStateType } from '../../@types/GitHubProvider';
import { findUser, userRepos, userReposStarred } from '../../services/api';


type GitHubProviderType = {
    children: ReactNode
}

export const GitHubContext = createContext<GitHubContextType>({} as GitHubContextType);

const GitHubProvider = ({ children }: GitHubProviderType) => {
    const [githubUser, setGitHubUser] = useState<GitHubUserStateType>({
        isSearch: false,
    });

    const getUser = async (username: string) => {
        try {
            const response = await findUser(username);
            console.log(response);
            setGitHubUser((prevState) => ({ ...prevState, user: response, isSearch: true }));
        } catch (error) {
            setGitHubUser((prevState) => ({ ...prevState, user: undefined, isSearch: true }));
        }

    }

    const getUserRepos = async (username: string) => {
        try {
            const response = await userRepos(username);
            console.log(response);
            setGitHubUser((prevState) => ({ ...prevState, repositories: response }));

        } catch (error) {
            setGitHubUser((prevState) => ({ ...prevState, repositories: undefined }));
        }
    }

    const getUserStarred = async (username: string) => {
        try {
            const response = await userReposStarred(username);
            console.log(response);
            setGitHubUser((prevState) => ({ ...prevState, starred: response }));
        } catch (error) {
            setGitHubUser((prevState) => ({ ...prevState, starred: undefined }));
        }
    }
    const contextValue = {
        ...githubUser,
        getUser: useCallback((username: string) => getUser(username), []),
        getUserRepos: useCallback((username: string) => getUserRepos(username), []),
        getUserStarred: useCallback((username: string) => getUserStarred(username), [])
    }

    return (
        <GitHubContext.Provider value={contextValue}>
            {children}
        </GitHubContext.Provider>
    );
}

export default GitHubProvider;