import { SelectMenuBuilder, SelectMenuStyle } from "../components/SelectMenu";
import { ChatInputCommandInteraction } from 'discord.js'
import { ActionRowBuilder } from "../components/ActionRow";
test('SelectMenuBuilder', () => {
    let interaction: any;
    const selectMenu = new ActionRowBuilder([
        new SelectMenuBuilder({
            type: SelectMenuStyle.User,
            custom_id: 'test',
            options: [{
                label: 'test',
                value: 'test',
            }],
        })]);
    expect(selectMenu).toBeDefined();
})