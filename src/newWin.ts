import { window, label } from "openrct2-flexui";
import { pluginName } from "./environment";
import { model } from "./mainModel";

export const newWindow = window({
    title: pluginName,
    width: {
        min: 50,
        max: 10000,
        value: 200
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