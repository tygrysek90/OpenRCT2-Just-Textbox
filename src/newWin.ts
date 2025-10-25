/*****************************************************************************
 * Copyright (c) 2025 Ríša Szlachta (tygrysek90)
 * 
 * https://github.com/tygrysek90/OpenRCT2-Just-Textbox
 * 
 * OpenRCT2-Just-Textbox
 * is licensed under the GNU General Public License version 3.
 *****************************************************************************/

/**
 * Secondary window
 */

import { window, label } from "openrct2-flexui";
import { model } from "./mainModel";

export const newWindow = window({
    title: "",
    width: {
        min: 50,
        max: 10000,
        value: 400
    },
    height: {
        min: 38,
        value: 38,
        max: 10000,
        },
    content: [
        label({
            text: model.newWinText
        })
    ]
})