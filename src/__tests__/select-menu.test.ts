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
    console.log((selectMenu as any).components[0].options)
    expect(selectMenu).toBeDefined();
})