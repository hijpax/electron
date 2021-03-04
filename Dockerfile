FROM node:14.16.0-buster
RUN apt-get update
RUN apt-get -y install libgtkextra-dev libgconf2-dev libnss3 libasound2 libxtst-dev libxss1 libx11-xcb1 libxshmfence1
RUN apt-get -y install libatk-bridge2.0-0
RUN apt-get -y install libdrm2
RUN apt-get -y install libgtk-3-0
RUN apt-get -y install libgbm1

WORKDIR code