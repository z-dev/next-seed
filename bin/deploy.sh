if [ "${CIRCLE_BRANCH}" == "master" ]; then
  #yarn run deploy:ci:dev
  echo "dev"
elif [ "${CIRCLE_BRANCH}" == "production" ]; then
  #yarn run deploy:ci:prod
  echo "prod"
fi
