/**
 *
 * Asynchronously loads the component for Timeline
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
