#!/usr/bin/bash

cargo run \
	--manifest-path ./cli/Cargo.toml \
	-- \
		--input ./remixicon/icons \
		--output ./publish/src/icons \
		--template ./publish/src/template/RiIconTemplate.tsx
