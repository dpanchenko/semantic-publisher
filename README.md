# Example

## Environment

`Node >= 8.4`

## Configuration

``` bash
export PORT=8080
export DEBUG=semantic-service*
export GIT_REPO_WATCH_BRANCH=master
export MQTT_URL=tcp://localhost:1883
export MQTT_CHANNEL=github:webhook:test
```

## Start

 - Clone or download this repository

``` bash
git clone git@gitlab.tripsee.com:tripseecom/booking-flight-service.git
```

 - Enter your local directory, and install dependencies:

``` bash
npm i
```

## Commands

``` bash
# run server in development mode
npm run dev
```

``` bash
# build documentation
npm run doc
```

``` bash
# run linter
npm run lint
```

``` bash
# run tests
npm test
```

