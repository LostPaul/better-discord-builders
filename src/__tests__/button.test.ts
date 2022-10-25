import { ButtonBuilder } from '../components/Button';
test('ButtonBuilder', () => {
    const button = new ButtonBuilder({
        label: 'test',
        style: 5,
        custom_id: 'test'
    });
    expect(button).toBeDefined();
});