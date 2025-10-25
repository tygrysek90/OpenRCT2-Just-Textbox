/*****************************************************************************
 * Copyright (c) 2025 Ríša Szlachta (tygrysek90)
 * 
 * https://github.com/tygrysek90/OpenRCT2-Just-Textbox
 * 
 * OpenRCT2-Just-Textbox
 * is licensed under the GNU General Public License version 3.
 *****************************************************************************/

/**
 * View model definition
 */

import { store } from "openrct2-flexui";

export const model = {
    /** Stores text to be linked into new window */
    newWinText: store<string>("")
}