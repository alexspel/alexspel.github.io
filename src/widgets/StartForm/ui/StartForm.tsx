import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../../app/providers/AppRouter/config';

export type StartFormValues = {
    phone: string;
    email: string;
};

const StartForm = () => {
    const navigate = useNavigate();

    const form = useForm<StartFormValues>({
        initialValues: {
            phone: '',
            email: '',
        },
    });

    return (
        <form
            className="form"
            onSubmit={form.onSubmit(() => {
                navigate(RoutePath.create);
            })}
        >
            <TextInput
                label="Номер телефона"
                placeholder="+7 999 999-99-99"
                {...form.getInputProps('phone')}
            />
            <TextInput
                label="Email"
                placeholder="tim.jennings@example.com"
                {...form.getInputProps('email')}
            />
            <Group justify="flex-start">
                <Button type="submit" className="button primary">
                    Начать
                </Button>
            </Group>
        </form>
    );
};

export default StartForm;
