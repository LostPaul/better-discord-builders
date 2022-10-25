import { SelectMenuBuilder, StringSelectMenuStyle } from "../components/SelectMenu";
test('SelectMenuBuilder', () => {
    const selectMenu = new SelectMenuBuilder({
        type: 'user',
        custom_id: 'test',
        options: [],
    });
    expect(selectMenu).toBeDefined();
    console.log(selectMenu.type);
})