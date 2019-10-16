FROM node:lts-alpine

RUN mkdir -p /home/jura/Projetos/git.rocketseat/desafio02/node_modules && chown -R node:node /home/jura/Projetos/git.rocketseat/desafio02

WORKDIR /home/jura/Projetos/git.rocketseat/desafio02

COPY package.json yarn.* ./

USER node

RUN yarn

COPY --chown=node:node . .

EXPOSE 3333

CMD ["yarn","start"]
