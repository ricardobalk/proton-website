FROM node:12

USER node
RUN mkdir -p /home/node/.npm-global \
             /home/node/app
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$NPM_CONFIG_PREFIX/bin:$PATH
RUN npm -g config set user "$USER" && \
    printf "Node version %s, npm version %s, yarn version %s\n\n" "$(node -v)" "$(npm -v)" "$(yarn -v)"

WORKDIR /home/node/app/
COPY --chown=node . .
# This fetches all dependencies and installs them
RUN yarn
# This runs an initial build, so we can know if this Docker image is working
RUN yarn run build

EXPOSE 3000

# After the inital build, it is up to you. Serve the files that came with the image,
# mount files from the host and run a 'dev' server, mount the dist/ and 'build' the site again, whatever.

ENTRYPOINT ["yarn", "run"]

# The default is to run a development version of the website.
# People can do `docker run --rm -p 3000:3000 -it ricardobalk/protonmail-website [dev/build/lint/start]`.
# but without providing this argument, dev is used:

CMD ["dev"]