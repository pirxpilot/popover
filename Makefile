CSS = node_modules/@pirxpilot/tip/tip.css

build: $(SRC) node_modules
	@mkdir -p build
	@browserify \
		--require query \
		--require ./index.js:popover \
		--outfile build/build.js

build/build.css: $(CSS) | build
	cat $^ > $@

node_modules: package.json
	npm install

clean:
	rm -fr build node_modules

test: build build/build.css
	@open test/index.html

.PHONY: clean build test
