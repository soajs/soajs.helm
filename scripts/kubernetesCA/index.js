"use strict";

/**
 * @license
 * Copyright SOAJS All Rights Reserved.
 *
 * Use of this source code is governed by an Apache license that can be
 * found in the LICENSE file at the root of this repository
 */

const {KubeConfig} = require('kubernetes-client');
const kubeconfig = new KubeConfig();
kubeconfig.loadFromDefault();
const Request = require('kubernetes-client/backends/request');
const backend = new Request({kubeconfig});
if (backend.requestOptions && backend.requestOptions.baseUrl && backend.requestOptions.ca && backend.authProvider) {
	console.log("\n");
	console.log("Kubernetes: " + kubeconfig.currentContext);
	console.log("\n");
	console.log(JSON.stringify(backend));
	console.log("\n");
	console.log("Copy the above JSON object");
	console.log("\n");
} else {
	console.log("Contact soajs team. unable to fetch needed config information for kubernetes: " + kubeconfig.currentContext);
}