//=============================================================================
// RPG Maker MZ - Common Event Equipment
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Common events / JS snippets when equipping or unequipping items.
 * @author Nerine
 * @help
 *     To use plugin put these tags in weapon/armor notes:
 *
 *     <onEquip: id, id, id>
 *
 *     <onUnequip: id, id, id>
 *
 *     <onEquipJS>
 *     code
 *     code
 *     </onEquipJS>
 *
 *     <onUnequipJS>
 *     code
 *     code
 *     </onUnequipJS>
 *
 * Terms of use:
 *   Free to use and modify as long as you credit me.
 */
((alias) => {
    Game_Actor.prototype.changeEquip = function(slotId, item) {
        let previous = this._equips[slotId].object();
        alias.apply(this, arguments);
        let current = this._equips[slotId].object();
        if (previous && current !== previous) {
            if (typeof previous.meta.onUnequip !== 'undefined'){
                previous.meta.onUnequip.replaceAll(" ", "").split(",").forEach(index => $gameTemp.reserveCommonEvent(index));
            }
            if (previous.note.contains("<onUnequipJS>") && previous.note.contains("</onUnequipJS>")) {
                eval(previous.note.split("<onUnequipJS>")[1].split("</onUnequipJS>")[0]);
            }
        }
        if (item && current === item) {
            if (typeof item.meta.onEquip !== 'undefined') {
                item.meta.onEquip.replaceAll(" ", "").split(",").forEach(index => $gameTemp.reserveCommonEvent(index));
            }
            if (item.note.contains("<onEquipJS>") && item.note.contains("</onEquipJS>")) {
                eval(item.note.split("<onEquipJS>")[1].split("</onEquipJS>")[0]);
            }
        }
    };
})(Game_Actor.prototype.changeEquip);