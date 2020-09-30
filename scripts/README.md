# SOAJS Helm helper

To create the soajs namespace
```bash
kubectl apply -f ./namespace.yaml
```

To delete the soajs namespace and everything deployed inside it
```bash
kubectl delete ns soajs 
```

To create a service for soajs mongodb in another namespace, you must change the namespace first on line 5
```bash
kubectl apply -f mongodb.yaml
```

To create the SOAJS rbac authorization if needed
```bash
kubectl apply -f rbac.yaml
```