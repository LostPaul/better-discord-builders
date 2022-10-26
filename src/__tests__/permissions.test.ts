import { toPermissionBitfield } from "../utils/toPermissionBitfield";
test("toPermissionBitfield", () => {
    const bitfield = toPermissionBitfield(['Administrator', 'ManageGuild', 'ManageMessages']);
    expect(bitfield).toBe(8232);
})