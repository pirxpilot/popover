
build: index.js template.html components
	@component build --dev

build-browserify: $(SRC) node_modules
	@mkdir -p build
	@browserify \
		--require query \
		--require ./index.js:popover \
		--outfile build/build.js

components:
	@component install  --dev

clean:
	rm -fr build components

.PHONY: clean build
