import ngReduxProvider from './components/ngRedux';

export const withCustomBinding = (angularBinding) => {
  return angularBinding.module('ngRedux', [])
  .provider('$ngRedux', ngReduxProvider)
  .name;  
}

export default angular.module('ngRedux', [])
  .provider('$ngRedux', ngReduxProvider)
  .name;
