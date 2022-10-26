import { SelectMenuBuilder, SelectMenuStyle } from "../components/SelectMenu";
test('SelectMenuBuilder', () => {
    const selectMenu = new SelectMenuBuilder({
        type: SelectMenuStyle.user,
        custom_id: 'test',
        options: [],
    });
    expect(selectMenu).toBeDefined();
})