/*****************************************************************************
 * Copyright (c) 2025 Ríša Szlachta (tygrysek90)
 * 
 * https://github.com/tygrysek90/OpenRCT2-Just-Textbox
 * 
 * OpenRCT2-Just-Textbox
 * is licensed under the GNU General Public License version 3.
 *****************************************************************************/

/**
 * Main window
 * GUI definition
 */

import { button, Colour, LayoutDirection, textbox, twoway, window } from "openrct2-flexui";
import { pluginName, pluginVersion } from "./environment";
import { pluginGraphics } from "./graphics/pluginGraphics";
import { model } from "./mainModel";
import { onAboutClick, onButtonClick } from "./mainActions";

export const mainWindow = window({
    title: `${pluginName} ${pluginVersion}`,
    width: {
        min: 50,
        max: 10000,
        value: 400
    },
    height: 38,
    direction: LayoutDirection.Horizontal,
    colours: [Colour["Grey"], Colour["Grey"]],
    content: [
        textbox({
            text: twoway(model.newWinText),
            maxLength: 1000,
        }),
        button({
            width: 14,
            height: 14,
            image: pluginGraphics.newWin.image,
            tooltip: "Open up new window with this text linked",
            onClick: () => onButtonClick(),
        }),
        button({
            width: 14,
            height: 14,
            image: pluginGraphics.questionMark.image,
            tooltip: "About",
            onClick: () => onAboutClick(),
        })
    ]
})