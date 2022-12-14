import { SlashCommandOptionBuilder, OptionType, SlashCommandBuilder } from '../interactions/SlashCommand';
test('SlashCommandBuilder', () => {
    const slashCommand = new SlashCommandBuilder({
        name: 'test',
        description: 'test',
        options: [
            {
                name: 'test',
                description: 'test',
                type: OptionType.String,
                required: true,
            },
        ],
    });
    expect(slashCommand).toBeDefined();
})