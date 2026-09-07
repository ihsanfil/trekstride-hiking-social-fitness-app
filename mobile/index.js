import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// Keep the legacy template name registered as well so an older native shell
// or a stale Metro session cannot crash the app before the new APK is loaded.
if (appName !== 'HelloWorld') {
  AppRegistry.registerComponent('HelloWorld', () => App);
}
