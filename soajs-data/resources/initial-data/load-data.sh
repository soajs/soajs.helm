#!/bin/bash
#-------------------------------------------------------------------------------
# @license
# Copyright SOAJS All Rights Reserved.
#
# Use of this source code is governed by an Apache license that can be
# found in the LICENSE file at the root of this repository
#-------------------------------------------------------------------------------

# Load initial data into SOAJS DB
# Expect initial data documents to be in /initial-data
# Expect names in the form <database_name>.<collection_name>.json
# No dots allowed in the database name!
# Note that mongo allows multiple JSON objects per file, so
# a complete collection can be placed in a single .json file
#
# This script is intended to be mounted on the mongo container
# in a directory mounted at /docker-entrypoint-initdb.d.   At initial
# boot, it will be run before the mongo container is made available to
# other containers.

set -x
echo "Initializing database"
for initfile in /initial-data/*.json
do
  f=$(basename $initfile)
  db=$(echo $f | cut -d "." -f1)
  coll=$(echo $f | cut -d "." -f2)
  cat $initfile | mongoimport --db $db --collection $coll --mode=upsert
done