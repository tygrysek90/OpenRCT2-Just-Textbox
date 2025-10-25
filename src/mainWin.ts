/**
 * Main window
 * GUI definition
 */

import { button, Colour, LayoutDirection, textbox, twoway, window } from "openrct2-flexui";
import { pluginName } from "./environment";
import { pluginGraphics } from "./graphics/pluginGraphics";
import { model } from "./mainModel";
import { onButtonClick } from "./mainActions";

export const mainWindow = window({
    title: pluginName,
    width: {
        min: 50,
        max: 10000,
        value: 200
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
                    onClick: () => onButtonClick(),
                }),
            
        
    ]
})