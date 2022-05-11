FROM peternguyentr/node-java-chrome:latest

# Fix certificate issues
RUN apt-get update --no-install-recommends && \
    apt-get -y install ca-certificates-java && \
    apt-get clean && \
    update-ca-certificates -f;

RUN npm install

RUN npm run load-test && npx codeceptjs run --steps
RUN ls report