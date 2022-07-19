import { render, screen } from "@testing-library/react";
import Card from ".";
import { ThemeProviderTest } from "../../utils/test-utils";

describe('Card Component', () => {
    it('should render username, language and description', () => {
        render(
            <ThemeProviderTest>
                <Card
                    description="Test description"
                    full_name="link"
                    language="TypeScript"
                    name="patrick"
                />
            </ThemeProviderTest>
        );

        expect(screen.getByText('Test description')).toBeInTheDocument();
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
        expect(screen.getByText('patrick')).toBeInTheDocument();
    })
})