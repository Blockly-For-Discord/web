/*

Made and Maintained by Blockly For Discord. Any Modification is prohibited and could lead to faulty behaviour of the site - v0.5.6

*/
import Router from './new_router.js';

import { HomeInit } from '../dashboard/home.js';
import { HomeSwitch } from '../dashboard/home.js';
window.HomeSwitch = HomeSwitch;
window.HomeInit = HomeInit;
import { Init404 } from '../dashboard/404.js';
import { Switch404 } from '../dashboard/404.js';
window.Switch404 = Switch404;
window.Init404 = Init404;
import { SettingsInit } from '../dashboard/settings.js';
import { SettingsSwitch } from '../dashboard/settings.js';
window.SettingsInit = SettingsInit;
window.SettingsSwitch = SettingsSwitch;
import { ProjectsInit } from '../dashboard/projects.js';
import { ProjectsSwitch } from '../dashboard/projects.js';
window.ProjectsInit = ProjectsInit;
window.ProjectsSwitch = ProjectsSwitch;


const app = new Router();

app.add('Home', '', 's-home', 'Home', HomeInit, HomeSwitch);