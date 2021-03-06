# soajs.helm

SOAJS helm is to deploy SOAJS using Helm Chart

### Complete Documentation
More information is available on SOAJS website under the section for [HELM](https://soajsorg.atlassian.net/wiki/x/MQBhaw).

### License
*Copyright SOAJS All Rights Reserved.*

Use of this source code is governed by an Apache license that can be found in the LICENSE file at the root of this repository.


# CLI help
To install soajs data
```bash
 helm install -name soajs-data --namespace soajs ./soajs-data/ -f ./values.yaml
 helm install -name soajs-data-claim --namespace soajs ./soajs-data-claim/ -f ./values.yaml
```
To install soajs mongo
```bash
 helm install -name soajs-mongo --namespace soajs ./soajs-mongo/ -f ./values.yaml
```
To install soajs mongo bridge, if you want to access the DB from the external
```bash
 helm install -name soajs-mongo-bridge --namespace soajs ./soajs-mongo-bridge/ -f ./values.yaml
#or
 helm install -name soajs-mongo-bridge --namespace soajs ./soajs-mongo-bridge-lb/ -f ./values.yaml
```
To install soajs gateway, you  must wait for soajsdata to be ready 
```bash
 helm install -name soajs-controller --namespace soajs ./soajs-controller/ -f ./values.yaml
```
To install soajs ui, you  must wait for gateway to be ready
```bash
 helm install -name soajs-ui --namespace soajs ./soajs-ui/ -f ./values.yaml
#or this for ssl, before running this you need to copy (tls.crt, tls.key) into soajs-ui-ssl/resources
 helm install -name soajs-ui --namespace soajs ./soajs-ui-ssl/ -f ./values.yaml
```
To install soajs ui bridge, you  must wait for ui to be ready
```bash
 helm install -name soajs-ui-bridge --namespace soajs ./soajs-ui-bridge-np/ -f ./values.yaml
#or
 helm install -name soajs-ui-bridge --namespace soajs ./soajs-ui-bridge-lb/ -f ./values.yaml
```
To install soajs oauth, you  must wait for gateway to be ready 
```bash
 helm install -name soajs-oauth --namespace soajs ./soajs-oauth/ -f ./values.yaml
```
To install soajs urac, you  must wait for gateway to be ready  
```bash
 helm install -name soajs-urac --namespace soajs ./soajs-urac/ -f ./values.yaml
```
To install soajs multitenant, you  must wait for gateway to be ready  
```bash
 helm install -name soajs-multitenant --namespace soajs ./soajs-multitenant/ -f ./values.yaml
```
To install soajs marketplace, you  must wait for gateway to be ready  
```bash
 helm install -name soajs-marketplace --namespace soajs ./soajs-marketplace/ -f ./values.yaml
```
To install soajs repositories, you  must wait for gateway to be ready  
```bash
 helm install -name soajs-repositories --namespace soajs ./soajs-repositories/ -f ./values.yaml
```
To install soajs infra, you  must wait for gateway to be ready  
```bash
 helm install -name soajs-infra --namespace soajs ./soajs-infra/ -f ./values.yaml
```
To install soajs console, you  must wait for gateway to be ready  
```bash
 helm install -name soajs-console --namespace soajs ./soajs-console/ -f ./values.yaml
```


