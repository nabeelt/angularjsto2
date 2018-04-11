
import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {MenuCmp} from './menu_cmp';

export const MenuModule = angular.module('MenuModule', ['ngRoute']);
MenuModule.component('menu', MenuCmp);
MenuModule.config(($routeProvider) => {
  $routeProvider.when('/', {template : '<menu></menu>'});
});


@NgModule({})
export class MenuNgModule {
}