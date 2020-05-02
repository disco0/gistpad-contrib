export function activate() {
	return {
		gistPadCompile: (extension: string, code: string) => {
			switch (extension) {
				case ".txt":
				case ".adoc":
					const asciidoc = require("asciidoctor")();
					return asciidoc.convert(code);

				case ".haml":
					const haml = require("haml");
					return haml.render(code);
			}
		}
	}
}