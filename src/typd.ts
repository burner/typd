export class Typd {
	public data: any;
	constructor
		( public input: any
		, public path: string[]
		)
	{
		this.data = getNestedObject(this.input, this.path);
	}

	getValue<T>(nullValue: T): T {
		return typeof this.data == typeof nullValue
			? this.data
			: nullValue;
	}

	get safeString(): string {
		return this.getValue<string>("");
	}

	get safeNumber(): number {
		return this.getValue<number>(Number.NaN);
	}

	get safeBoolean(): boolean {
		return this.getValue<boolean>(false);
	}

	get safeArray(): any[] {
		return Array.isArray(this.data)
			? this.data
			: [];
	}

	get safeObject(): {} {
		return this.getValue<({})>({});
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
