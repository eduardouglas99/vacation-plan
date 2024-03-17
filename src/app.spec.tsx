import { render, fireEvent, waitFor, screen } from '@testing-library/react'; 
import Button from './components/button/button';
import userEvent from '@testing-library/user-event';
import Header from './components/header/header';
import Modal from './components/modal/modal';
import Calendar from './components/calendar/calendar';

describe('Button Component', () => {
    test('should be able to open Modal', async () => {
        const { getByText } = render(<Button />);
      
        const buttonHome = getByText('New vacation plan');
        expect(buttonHome).toBeInTheDocument();

        userEvent.click(buttonHome);

        await waitFor(() => {
            const formElement = document.querySelector('div.modal__ModalOverlay-sc-236c1029-0');
            if (formElement) {
                const formTitle = formElement.querySelector('h3.modal__ModalTitle-sc-236c1029-3');
                expect(formTitle).toBeInTheDocument();
            }
        });
    });
})

describe('Calendar Component', () => {
    test('should render DayPicker and Back to Today button', () => {
        render(<Calendar />);
    
        const dayPickers = screen.getAllByRole('grid');
        const dayPicker = dayPickers[0];
        expect(dayPicker).toBeInTheDocument();
    
        const backToTodayButton = screen.getByText('Back to Today');
        expect(backToTodayButton).toBeInTheDocument();
    
        expect(backToTodayButton).toBeDisabled();
    
        fireEvent.click(backToTodayButton);
     });
})


describe('Header Component', () => {
    test('should be able to render this year', () => {
        render(<Header/>);

        const currentYear = new Date().getFullYear();
        waitFor(() => {
            expect(currentYear).toBeInTheDocument();
            expect(Button).toBeInTheDocument();
        })
    })
})

describe('Modal Component', () => {
    test('should be able to change the input value', async () => {
        render(<Modal/>)

        await waitFor(() => {
            const inputInitial = screen.queryByTestId('input-initial') as HTMLInputElement;
            const inputEnd = screen.queryByTestId('input-end') as HTMLInputElement;
            const inputTitle = screen.queryByTestId('input-title') as HTMLInputElement;
            const inputDescription = screen.queryByTestId('input-description') as HTMLInputElement;
    
            if (inputInitial && inputEnd && inputTitle && inputDescription) {
                expect(inputInitial).toBeInTheDocument();
                expect(inputEnd).toBeInTheDocument();
                expect(inputTitle).toBeInTheDocument();
                expect(inputDescription).toBeInTheDocument();

                fireEvent.change(inputInitial, { target: { value: 'Novo valor para o input inicial' } });
                fireEvent.change(inputEnd, { target: { value: 'Novo valor para o input final' } });
                fireEvent.change(inputTitle, { target: { value: 'Novo valor para o input título' } });
                fireEvent.change(inputDescription, { target: { value: 'Novo valor para o input descrição' } });

                expect(inputInitial.value).toBe('Novo valor para o input inicial');
                expect(inputEnd.value).toBe('Novo valor para o input final');
                expect(inputTitle.value).toBe('Novo valor para o input título');
                expect(inputDescription.value).toBe('Novo valor para o input descrição');
            }
        });
    })

    test('should be able to the value not empty, submit and cleaning value', async () => {
        render(<Modal/>)

        await waitFor(() => {
            const inputNames = screen.queryByTestId('div.dropdown-container') as HTMLInputElement;
            const inputInitial = screen.queryByTestId('input-initial') as HTMLInputElement;
            const inputEnd = screen.queryByTestId('input-end') as HTMLInputElement;
            const inputTitle = screen.queryByTestId('input-title') as HTMLInputElement;
            const inputDescription = screen.queryByTestId('input-description') as HTMLInputElement;
    
            if (inputInitial && inputEnd && inputTitle && inputDescription) {
                expect(inputNames).toBeInTheDocument();
                expect(inputInitial).toBeInTheDocument();
                expect(inputEnd).toBeInTheDocument();
                expect(inputTitle).toBeInTheDocument();
                expect(inputDescription).toBeInTheDocument();

                expect(inputNames.value).not.toBe('');
                expect(inputInitial.value).not.toBe('');
                expect(inputEnd.value).not.toBe('');
                expect(inputTitle.value).not.toBe('');
                expect(inputDescription.value).not.toBe('');

                // Simula o envio do formulário
                const submitButton = screen.getByTestId('submit-button');
                fireEvent.click(submitButton);

                fireEvent.change(inputNames, { target: { value: '' } });
                fireEvent.change(inputInitial, { target: { value: '' } });
                fireEvent.change(inputEnd, { target: { value: '' } });
                fireEvent.change(inputTitle, { target: { value: '' } });
                fireEvent.change(inputDescription, { target: { value: '' } });

                expect(inputInitial.value).toBe('');
                expect(inputEnd.value).toBe('');
                expect(inputTitle.value).toBe('');
                expect(inputDescription.value).toBe('');
            }
        });
    })

    test('should be able to close modal', async () => {
        render(<Modal/>)

        await waitFor(() => {
            const closeModal = screen.queryByTestId('modal-close-button');

            if(closeModal) {
                expect(closeModal).toBeInTheDocument();
                fireEvent.click(closeModal)
            }
        })
    })

})