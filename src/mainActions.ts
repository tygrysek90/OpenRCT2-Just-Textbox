/*****************************************************************************
 * Copyright (c) 2025 Ríša Szlachta (tygrysek90)
 * 
 * https://github.com/tygrysek90/OpenRCT2-Just-Textbox
 * 
 * OpenRCT2-Just-Textbox
 * is licensed under the GNU General Public License version 3.
 *****************************************************************************/

/**
 * GUI functions
 */

import { model } from "./mainModel";
import { newWindow } from "./newWin";

export function onButtonClick() {
    newWindow.open()
}

export function onAboutClick() {
    model.newWinText.set("https://github.com/tygrysek90/OpenRCT2-Just-Textbox")
    newWindow.open()
}