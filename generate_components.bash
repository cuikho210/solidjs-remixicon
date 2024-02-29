#!/usr/bin/bash

mkdir -p ./publish/src/icons

cargo run \
	--manifest-path ./cli/Cargo.toml \
	-- \
		--input ./remixicon/icons \
		--output ./publish/src/icons \
		--template ./publish/src/template/RiIconTemplate.tsx
