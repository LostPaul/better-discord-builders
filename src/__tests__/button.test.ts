import { ButtonBuilder, ButtonStyle } from '../components/Button';
test('ButtonBuilder', () => {
    const button = new ButtonBuilder({
        label: 'test',
        style: ButtonStyle.Primary,
        custom_id: 'test'
    });
    expect(button).toBeDefined();
});