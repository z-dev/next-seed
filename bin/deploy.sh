if [ "${CIRCLE_BRANCH}" == "master" ]; then
  #yarn run deploy:ci:dev
elif [ "${CIRCLE_BRANCH}" == "production" ]; then
  #yarn run deploy:ci:prod
fi
