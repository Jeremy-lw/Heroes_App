import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { PublicRoute } from "../../../src/router/PublicRoute";
import { MemoryRouter } from "react-router";

describe('Pruebas en el PrivateRoute', () => { 
    test('debe mostrar el children si esta autenticado', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: false,
            user: {
                id: 'abc',
                name: 'Jeremy'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PublicRoute>
                        <h1>Ruta privada</h1>
                    </PublicRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta privada')).toBeTruthy();
        expect( localStorage.setItem).toHaveBeenCalledWith('lastPath','/search?q=batman');
        screen.debug();
    });
});