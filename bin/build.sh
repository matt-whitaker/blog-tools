#!/bin/bash

if [ "${CIRCLE_BRANCH}" == "master" ]; then
  NODE_ENV=production npx gulp build
else
  NODE_ENV=qa npx gulp build
fi

echo "Built site on $CIRCLE_BRANCH"