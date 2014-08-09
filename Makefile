mocha=./node_modules/mocha/bin/mocha
component=./node_modules/component/bin/component
ifeq ($(shell uname), Linux)
	open=xdg-open
endif

test: node_modules
	@$(mocha) test -R dot

test-component: node_modules components public
	@$(open) test/browser.html

node_modules:
	@npm i --dev

components:
	@$(component) install --dev

public: lib/index.js
	@component build -o $@ -n $@ --dev

.PHONY: clean test
