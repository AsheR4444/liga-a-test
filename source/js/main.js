import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {disableScrolling} from './utils/scroll-lock';
import './loader';
import './animation';
import './clicker';
import './opener';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
/* disableScrolling(); */
