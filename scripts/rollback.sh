#!/bin/bash

# ./scripts/rollback.sh <build_hash_from_minio>

# before run script you need to execute "export MUSICON_PASSWORD=<password>"
if [[ -z "$MUSICON_PASSWORD" ]];then
    echo "MUSICON_PASSWORD env var is not set!"
    exit 1
fi

# 
rollback_hash=$1
if [[ -z "$rollback_hash" ]];then
    echo "Desired hash was not specified!"
    exit 1
fi

sshpass -p "$MUSICON_PASSWORD" ssh musicon@musicon.space "/usr/local/scripts/frontend_rollback.sh $rollback_hash"
