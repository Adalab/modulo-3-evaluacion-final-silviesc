import App from "../components/App";
import { render, screen } from "@testing-library/react";

describe( "Test del componente App", () => {
    test("Buscar Anacleta en el componente", () => { 
        render(<App/>)
        const textAnacleta = screen.getAllByText(/anacleta/i);
        expect(textAnacleta.length).toBe(1);
    })
})