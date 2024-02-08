import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe("Pruebas para el Home", () => {
    test('Probar si hay un título', () => {
        const texto = 'Página principal';
        render (<Home/>)
        screen.getByRole('heading', {name: texto})
    })
    test('Probar si hay un botón', () => {
        const texto = 'Login';
        render (<Home/>)
        screen.getByRole('button', {name: texto})
    })
})