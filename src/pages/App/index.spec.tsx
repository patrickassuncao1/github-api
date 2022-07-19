import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from ".";
import GitHubProvider from "../../context/GitHubProvider";
import { ThemeProviderTest } from "../../utils/test-utils";

describe('App Component', () => {

    it('should search user and render user github', async () => {
        render(
            <ThemeProviderTest>
                <GitHubProvider>
                    <App />
                </GitHubProvider>
            </ThemeProviderTest>
        );

        const inputElement = screen.getByPlaceholderText('Usuário do github');
        const buttonElement = screen.getByText('PESQUISAR');

        userEvent.type(inputElement, 'patrickassuncao1');
        userEvent.click(buttonElement);


        await waitFor(() => {
            const imgEl = screen.getByRole('img');
            expect(imgEl).toBeInTheDocument();
        })

        expect(screen.queryByText('Usuário Não Encontrado')).not.toBeInTheDocument();

    })
})
