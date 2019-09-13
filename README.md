# Foreign Exchange Currency Converter

A simple application used to calculate converted foreign exchange currency using the Foreign Exchange Rates API, built with React.

## Requirements

For development, you will only need Node.js installed on your environment.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v12.10.0

    $ npm --version
    6.11.3

## Install

    $ git clone https://github.com/zumarandy/foreign-exchange-currency-app.git
    $ cd foreign-exchange-currency-app
    $ npm install

## Start server

    $ npm start

## Folder Structure

```                                                 
foreign-exchange-currency-app/
    README.md
    node_modules/
    package.json
    .gitignore
    public/
        index.html
        favicon.ico
        manifest.json
    src/
        components/
            AddCurrencyInput.js
            AmountInput.js
            CurrencyCard.js
        scenes/
            Home.js
        services/
            api/
                getRatesBaseUSD.js
        utils
            formatNumbers.js
            currenciesName.json
    App.css
    App.js
    App.test.js
    index.css
    index.js
    serviceWorker.js
```