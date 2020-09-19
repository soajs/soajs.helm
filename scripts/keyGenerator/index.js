'user strict';

/**
 * @license
 * Copyright SOAJS All Rights Reserved.
 *
 * Use of this source code is governed by an Apache license that can be
 * found in the LICENSE file at the root of this repository
 */


const keyPassword = "5cef8f4a-a66f-11ea-b652-5fd9e891d604";


// Do not change the below

const soajs = require('soajs');
const core = soajs.core;

let tenant = {
	id: '5c0e74ba9acc3c5a84a51259'
};

let application = {
	package: "DSBRD_GUEST",
};

let config = {
	algorithm: "aes256",
	password: keyPassword
};

core.key.generateInternalKey((err, uId) => {
	console.log(uId, 'internal Key');
	
	core.key.generateExternalKey(uId, tenant, application, config, (err, extKey) => {
		console.log(extKey, 'external Key');
	});
});