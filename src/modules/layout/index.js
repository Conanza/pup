import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { states } from './layout.states';

export default angular.module('rqhlaw.layout', [uiRouter])
  .config(states)
  .name;
