import { PermissionFlagsBits } from "discord-api-types/v10";
export function toPermissionBitfield(permissions: (keyof typeof PermissionFlagsBits)[]) {
    let bitfield = 0n;
    for (const permission of permissions) {
        bitfield |= BigInt(PermissionFlagsBits[permission]);
    }
    return parseInt(bitfield as unknown as string, 10);
}
