export class Typd {
	public data: any;
	constructor
		( public input: any
		, public path: string[]
		)
	{
		this.data = getNestedObject(this.input, this.path);
	}

	get safeString(): string {
		return typeof this.data == "string"
			? this.data
			: "";
	}
}

export function t(input: any, path: string | string[]) : Typd {
	return new Typd
		( input
		, typeof path === "string"
			? path.split(".")
			: path
		);
}

function getNestedObject(data: any, path: string[]): any {
	if(path.length == 0) {
		return data;
	} else if(data != null
		&& typeof data === "object"
		&& path.length > 0
		&& data.hasOwnProperty(path[0]))
	{
		const newPath = path.slice(1);
		return getNestedObject(data[path[0]], newPath)
	} else {
		return null;
	}
}
