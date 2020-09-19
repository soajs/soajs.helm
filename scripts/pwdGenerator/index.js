'user strict';

/**
 * @license
 * Copyright SOAJS All Rights Reserved.
 *
 * Use of this source code is governed by an Apache license that can be
 * found in the LICENSE file at the root of this repository
 */


const password = "password";


// Do not change the below

const soajsCore = require('soajs');
const Hasher = soajsCore.hasher;
const crypto = require("crypto");

let encrypt = (pwd, cb) => {
	let hashConfig = {
		"hashIterations": 12
	};
	let optionalAlgorithm = null;
	
	Hasher.init(hashConfig);
	
	if (optionalAlgorithm && optionalAlgorithm !== '') {
		let hash = crypto.createHash(optionalAlgorithm);
		pwd = hash.update(pwd).digest('hex');
	}
	
	Hasher.hash(pwd, true, (error, pwdEncrypted) => {
		return cb(error, pwdEncrypted);
	});
};

encrypt(password, (error, encrypted) => {
	if (encrypted) {
		console.log('Password: ', password);
		console.log('Encrypted: ', encrypted);
	} else {
		console.log(error);
	}
});
