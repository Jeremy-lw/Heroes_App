import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import {PublicRoute} from '../../../src/router/PublicRoute'
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Pruebas en PublicRoute', () => {
    test('Si no esta autenticado debe mostrar en children', () => { 

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta publica')).toBeTruthy();

        screen.debug();
    });

    test('debe de navegar si esta autenticado', () => { 
        const contextValue = {
            logged: true,
            user: {
                name: 'jeremy',
                id: 'anc'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        }/>
                        <Route path="marvel" element={<h1>Pagina Marvel</h1>}/>
                    </Routes>
                    <PublicRoute>
                        <h1>Ruta publica</h1>
                    </PublicRoute>
                </MemoryRouter>                
            </AuthContext.Provider>
        );

        expect(screen.getByText('Pagina Marvel')).toBeTruthy();

    })
});
