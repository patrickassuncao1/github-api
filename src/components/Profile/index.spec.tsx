import { render, screen } from "@testing-library/react";
import Profile from ".";

import { ThemeProviderTest, userFake } from "../../utils/test-utils";

describe('Profile Component', () => {

    it('should render user github information', async () => {

        render(
            <ThemeProviderTest>
                <Profile {...userFake} />
            </ThemeProviderTest>
        );

        const imgEl = screen.getByRole('img');

        expect(screen.getByText(userFake.name)).toBeInTheDocument();
        expect(screen.getByText(userFake.company)).toBeInTheDocument();
        expect(screen.getByText(userFake.location)).toBeInTheDocument();
        expect(screen.getByText(userFake.blog)).toBeInTheDocument();
        expect(screen.getByText(userFake.followers)).toBeInTheDocument();
        expect(screen.getByText(userFake.following)).toBeInTheDocument();
        expect(screen.getByText(userFake.public_gists)).toBeInTheDocument();
        expect(screen.getByText(userFake.public_repos)).toBeInTheDocument();

        expect(imgEl).toBeInTheDocument();
    })
})