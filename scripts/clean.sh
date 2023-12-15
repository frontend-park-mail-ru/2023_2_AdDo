#!/bin/bash

clean_bucket() {
    # Your MinIO server details
    MINIO_ALIAS="musicon"
    MINIO_BUCKET=$1

    OBJECT_REGEX=$2

    # Number of objects to keep
    KEEP_OBJECTS=8

    # Fetch all objects in the bucket
    OBJECTS_LIST=$(mc ls "$MINIO_ALIAS/$MINIO_BUCKET" | grep "$OBJECT_REGEX" | sort | awk '{print $6}')

    # Count the total number of objects
    TOTAL_OBJECTS=$(echo "$OBJECTS_LIST" | wc -l)

    # Calculate the number of objects to delete
    OBJECTS_TO_DELETE=$((TOTAL_OBJECTS - KEEP_OBJECTS))

    # Sort the objects list by date and extract the oldest ones for deletion
    OBJECTS_OLDEST=$(echo "$OBJECTS_LIST" | head -n $OBJECTS_TO_DELETE)

    # Delete the oldest objects
    for OBJECT in $OBJECTS_OLDEST
    do
        mc rm "$MINIO_ALIAS/$MINIO_BUCKET/$OBJECT"
    done
}

clean_bucket "frontend" "sw-.*\.js"
clean_bucket "frontend/assets/css" "app-.*\.css"
clean_bucket "frontend/assets/js" "app-.*\.js"
clean_bucket "frontend/assets/js" "vendors-.*\.js"
