import { GitHubContext } from "../../context/GitHubProvider"
import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import theme from "../../themes/theme"
import { GitHubUserType } from "../../@types/model/user"
import { findUser } from "../../services/api"

type GitHubProviderTestType = {
    children: ReactNode,
    user: GitHubUserType
}

export const ThemeProviderTest = ({ children }: { children: ReactNode }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const userFake = {
    blog: 'urlFake2.com',
    company: 'empresa',
    followers: 20,
    following: 30,
    location: 'manaus',
    name: 'Fake',
    public_gists: 25,
    public_repos: 22
}

// export const GitHubProviderTest = ({ children, user }: GitHubProviderTestType) => {
//     return (
//         <ThemeProviderTest>
//             <GitHubContext.Provider value={{ getUser: findUser, loading: false, user: user }}>
//                 {children}
//             </GitHubContext.Provider>
//         </ThemeProviderTest>
//     )
// }