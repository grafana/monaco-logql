'use strict';

// noinspection JSUnusedGlobalSymbols
export const logQLLanguageDefinition = {
	id: 'logql',
	extensions: [ '.logql' ],
	aliases: [ 'Loki', 'loki', 'Grafana Loki', 'Grafana loki', 'grafana loki', 'logQL', 'LogQL', 'logql', 'LogQL' ],
	mimetypes: [],
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	loader: () => import('./logql')
};