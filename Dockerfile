FROM node:12
USER node
RUN mkdir -p /home/node/.npm \
             /home/node/app
ENV NPM_CONFIG_PREFIX=/home/node/.npm
ENV PATH=$NPM_CONFIG_PREFIX/bin:$PATH
RUN npm -g config set user "$USER" && \
    printf "Node version %s, npm version %s, yarn version %s\n\n" "$(node -v)" "$(npm -v)" "$(yarn -v)"
WORKDIR /home/node/app/
COPY --chown=node . .
RUN yarn
RUN yarn run build
EXPOSE 3000
ENTRYPOINT ["yarn", "run"]
CMD ["dev"]