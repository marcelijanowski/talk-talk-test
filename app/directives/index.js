import registerPresentationCard from './presentation-card/presentation-card';
import registerApp from './app/app-controller';

export default ngModule => {
  registerApp(ngModule);
  registerPresentationCard(ngModule);
};