# !/bin/bash

# ./scripts/deploy.sh

# before run script you need to execute "export MUSICON_PASSWORD=<password>"
if [[ -z "$MUSICON_PASSWORD" ]];then
    echo "MUSICON_PASSWORD env var is not set!"
    exit 1
fi
rm dist/assets/js/* dist/assets/css/* dist/sw*.js 2> /dev/null
npm run build
if [[ $? -ne 0  ]];then
    echo "Error while build"
    exit 1
fi

sw_filename=sw-$(ls dist/assets/js/app-* |  awk -F'[-.]' '{print $2}').js
sed -i "s/sw.js/$sw_filename/g" dist/index.html
mv dist/sw.js dist/$sw_filename
/usr/local/bin/mc cp --recursive dist/ musicon/frontend
if [[ $? -ne 0  ]];then
    echo "Error upload dist to minio"
    exit 1
fi
sshpass -p "$MUSICON_PASSWORD" scp dist/index.html musicon@musicon.space:/home/musicon/dist
if [[ $? -ne 0  ]];then
    echo "Error upload index.html to VM"
    exit 1
fi
