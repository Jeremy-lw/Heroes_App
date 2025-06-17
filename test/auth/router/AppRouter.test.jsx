import { render } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router";
import { AppRouter } from "../../../src/router";

describe('Pruebas en AppRouter', () => { 
    test('debe mostrar el login si no esta autenticado', () => {
        const contextValue = {
            logged: false,
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getAllByText('login').length).toBe(2)
    })
});