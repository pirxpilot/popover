
build: $(SRC) node_modules
	@mkdir -p build
	@browserify \
		--require query \
		--require ./index.js:popover \
		--outfile build/build.js

node_modules: package.json
	npm install

clean:
	rm -fr build node_modules

.PHONY: clean build
