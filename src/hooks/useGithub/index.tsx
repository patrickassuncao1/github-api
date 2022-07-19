import { useContext } from "react";
import { GitHubContext } from "../../context/GitHubProvider";

const useGithub = () => {

    const context = useContext(GitHubContext);
    
    return context;
}

export default useGithub;