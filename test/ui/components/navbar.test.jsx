import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual(react-router-rom),
    useNavigate: () => mockedUseNavigate,

}));

describe('pruebas en navbar', () => { 

    const contextValue ={
        logged: true,
        user: {
            name: 'Jeremy'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks() );

    test('debe mostrar el nombre del usuario logueado', () => { 

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Jeremy')).toBeTruthy();
    });

    test('debe llamar el logout y navigate cuando se hace click en el boton', () => { 
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );

        expect(contextValue.logout ).toHaveBeenNthCalledWith();
        expect( mockedUseNavigate.logout ).toHaveBeenCalledWith('/login', {'replace': true});
    });
 });