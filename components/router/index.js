/*

Made and Maintained by Blockly For Discord. Any Modification is prohibited and could lead to faulty behaviour of the site - v0.5.6

*/

import { Router } from './router.js';

import { HomeInit, HomeSwitch } from '../dashboard/home.js';
window.HomeSwitch = HomeSwitch;
window.HomeInit = HomeInit;
import { Init404, Switch404 } from '../dashboard/404.js';
window.Switch404 = Switch404;
window.Init404 = Init404;
import { SettingsInit, SettingsSwitch } from '../dashboard/settings.js';
window.SettingsInit = SettingsInit;
window.SettingsSwitch = SettingsSwitch;
import { ProjectsInit, ProjectsSwitch } from '../dashboard/projects.js';
window.ProjectsInit = ProjectsInit;
window.ProjectsSwitch = ProjectsSwitch;
import { ExploreInit, ExploreSwitch } from '../dashboard/explore.js';
window.ExploreInit = ExploreInit;
window.ExploreSwitch = ExploreSwitch;
import { UsersInit, UsersSwitch } from '../dashboard/users.js';
window.UsersInit = UsersInit;
window.UsersSwitch = UsersSwitch;
import { ExtensionsInit, ExtensionsSwitch } from '../dashboard/extensions.js';
window.ExtensionsInit = ExtensionsInit;
window.ExtensionsSwitch = ExtensionsSwitch;
import { UpdatesInit, UpdatesSwitch } from '../dashboard/updates.js';
window.UpdatesInit = UpdatesInit;
window.UpdatesSwitch = UpdatesSwitch;
import { DeveloperInit, DeveloperSwitch } from '../dashboard/developer.js';
window.DeveloperInit = DeveloperInit;
window.DeveloperSwitch = DeveloperSwitch;

const Routes = new Router('sidebar-icons', 'sidebar-bottom-region');

Routes.register('home', '', 'components/media/pages/home.svg', 'top', 'Home', false, HomeInit, HomeSwitch);
Routes.register('projects', 'projects', 'components/media/pages/projects.svg', 'top', 'Projects', false, ProjectsInit, ProjectsSwitch);
Routes.register('explore', 'explore', 'components/media/pages/explore.svg', 'top', 'Explore', false, ExploreInit, ExploreSwitch);
Routes.register('users', 'users', 'components/media/pages/users.svg', 'top', 'Users', false, UsersInit, UsersSwitch);
Routes.register('extensions', 'extensions', 'components/media/pages/extensions.svg', 'top', 'Extensions', false, ExtensionsInit, ExtensionsSwitch);
Routes.register('updates', 'updates', 'components/media/pages/updates.svg', 'top', 'Updates', false, UpdatesInit, UpdatesSwitch);
Routes.register('developer', 'developer', 'components/media/pages/developer.svg', 'top', 'Developer', false, DeveloperInit, DeveloperSwitch);
Routes.register('settings', 'settings', 'components/media/pages/settings.svg', 'bottom', 'Settings', false, SettingsInit, SettingsSwitch);

Router.loadByPath()
