
import * as angular from 'angular'
import 'angular-route'


import {MessagesModule} from './messages';
import {MenuModule} from './menu';

export const Ng1AppModule = angular.module('Ng1AppModule', ['ngRoute', MessagesModule.name, MenuModule.name]);

Ng1AppModule.config(($locationProvider) => {
  $locationProvider.html5Mode(true)
});
