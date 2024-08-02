/*

Made and Maintained by Blockly For Discord. Any Modification is prohibited and could lead to faulty behaviour of the site - v0.5.6

*/

import { Router } from './router.js';

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

const Routes = new Router('sidebar-icons', 'sidebar-bottom-region');

Routes.register('home','','components/media/pages/home.svg','top','tooltip',false ,HomeInit, HomeSwitch);
Routes.register('projects','projects','components/media/pages/projects.svg','top','tooltip',false ,ProjectsInit, ProjectsSwitch);

Router.loadByPath()
