/*****************************************************************************
 * Copyright (c) 2025 Ríša Szlachta (tygrysek90)
 * 
 * https://github.com/tygrysek90/OpenRCT2-Just-Textbox
 * 
 * OpenRCT2-Just-Textbox
 * is licensed under the GNU General Public License version 3.
 *****************************************************************************/

import { build, pluginName } from "./environment";
import { mainWindow } from "./mainWin";

export function startup()
{
	// Write code here that should happen on startup of the plugin.


	// Register a menu item under the map icon:
	if (typeof ui !== "undefined")
	{
		ui.registerMenuItem(pluginName, () => mainWindow.open());
		if (build.isDevelopment) {
			mainWindow.open()
		}
	}
}