#!/usr/bin/bash

cargo run \
	--manifest-path ./cli/Cargo.toml \
	-- \
		--input ./remixicon/icons \
		--output ./template/src/icons \
		--template ./template/src/template/RiIconTemplate.tsx
