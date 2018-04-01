#!/bin/bash

if [ "${CIRCLE_BRANCH}" == "master" ]; then
  NODE_ENV=production npx gulp
else
  NODE_ENV=qa npx gulp
fi

echo "Built site on $CIRCLE_BRANCH"