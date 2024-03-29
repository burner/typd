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
		return typeof this.data == typeof nullValue && this.data != null
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

	public safeGenericObject<T = any>(): T {
		return <T>this.getValue<({})>({});
	}

	get isString(): boolean {
		return typeof this.data === "string";
	}

	get isNumber(): boolean {
		return typeof this.data === "number";
	}

	get isBoolean(): boolean {
		return typeof this.data === "boolean";
	}

	get isArray(): boolean {
		return Array.isArray(this.data);
	}

	get isObject(): boolean {
		return typeof this.data === "object" && this.data !== null;
	}

	get isNull(): boolean {
		return this.data == null;
	}

	get isUndefined(): boolean {
		return this.data === undefined;
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
	if((path?.length ?? 0) == 0) {
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
