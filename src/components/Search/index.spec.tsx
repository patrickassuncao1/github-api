import { render, screen } from "@testing-library/react";
import Search from ".";
import { ThemeProviderTest } from "../../utils/test-utils";

describe('Search Component', () => {

    it('should render search input', () => {
        render(<ThemeProviderTest><Search /></ThemeProviderTest>);

        const inputElement = screen.getByPlaceholderText('Usuário do github');

        expect(inputElement).toBeInTheDocument();
    })
})