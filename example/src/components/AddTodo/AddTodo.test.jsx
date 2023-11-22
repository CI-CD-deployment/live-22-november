import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

import AddTodo from "./AddTodo";

describe('AddTodo', () => {
    it('should add a todo', () => {
        render(<AddTodo setTodos={ () => { } } />);
        const fetch = vi.spyOn(window, 'fetch'); // Vi lyssnar på fetch här


        const todoInput = screen.getByRole('textbox');
        fireEvent.change(todoInput, {
            target: { value: 'Skriver test' }
        });

        fireEvent.click(screen.getByRole('button'));

        //expect(screen.getByText(/Kul/)).toBeInTheDocument();
        expect(screen.getByRole('todo-text')).toHaveTextContent(/^Skriver test$/);
        expect(fetch).toHaveBeenCalled(); // Kollar att ett fetch-anrop gjorts
    });
});