/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType, Point, Point_$type, PointUtil } from "./type";
import { GeometryType } from "./GeometryType";
import { PathFigureCollection } from "./PathFigureCollection";
import { List$1 } from "./List$1";
import { PathMarkupToken } from "./PathMarkupToken";
import { PathFigure } from "./PathFigure";
import { PathMarkupTokenType } from "./PathMarkupTokenType";
import { LineSegment } from "./LineSegment";
import { PathSegment } from "./PathSegment";
import { BezierSegment } from "./BezierSegment";
import { ArcSegment } from "./ArcSegment";
import { Size } from "./Size";
import { InvalidOperationException } from "./InvalidOperationException";
import { SweepDirection } from "./SweepDirection";
import { stringEmpty } from "./string";

/**
 * @hidden 
 */
export abstract class Geometry extends Base {
	static $t: Type = markType(Geometry, 'Geometry');
	constructor() {
		super();
	}
	abstract get type(): GeometryType;
	static parse(source: string): Geometry {
		if (source != null) {
			let parser: PathMarkupParser = new PathMarkupParser();
			return parser.parseGeometry(source);
		}
		return null;
	}
}

/**
 * @hidden 
 */
export class PathGeometry extends Geometry {
	static $t: Type = markType(PathGeometry, 'PathGeometry', (<any>Geometry).$type);
	constructor() {
		super();
		this.figures = new PathFigureCollection();
	}
	private _figures: PathFigureCollection = null;
	get figures(): PathFigureCollection {
		return this._figures;
	}
	set figures(value: PathFigureCollection) {
		this._figures = value;
	}
	protected get_type(): GeometryType {
		return GeometryType.Path;
	}
	get type(): GeometryType {
		return this.get_type();
	}
}

/**
 * @hidden 
 */
export class PathMarkupParser extends Base {
	static $t: Type = markType(PathMarkupParser, 'PathMarkupParser');
	private _token: string = '\0';
	private _curIndex: number = 0;
	private _lastPoint: Point = <Point>{ $type: Point_$type, x: 0, y: 0 };
	private _tokens: List$1<PathMarkupToken> = null;
	private _path: string = null;
	parseGeometry(source: string): Geometry {
		this._tokens = new List$1<PathMarkupToken>((<any>PathMarkupToken).$type, 0);
		this._curIndex = 0;
		while (this.readToken(source)) {
			switch (this._token) {
				case 'M':

				case 'm':
				this._tokens.add(new PathMarkupToken(PathMarkupTokenType.Move, this._token.charCodeAt(0) < 'm'.charCodeAt(0)));
				break;

				case 'L':

				case 'l':
				this._tokens.add(new PathMarkupToken(PathMarkupTokenType.Line, this._token.charCodeAt(0) < 'l'.charCodeAt(0)));
				break;

				case 'H':

				case 'h':
				this._tokens.add(new PathMarkupToken(PathMarkupTokenType.Horizontal, this._token.charCodeAt(0) < 'h'.charCodeAt(0)));
				break;

				case 'V':

				case 'v':
				this._tokens.add(new PathMarkupToken(PathMarkupTokenType.Vertical, this._token.charCodeAt(0) < 'v'.charCodeAt(0)));
				break;

				case 'C':

				case 'c':
				this._tokens.add(new PathMarkupToken(PathMarkupTokenType.CubicBezier, this._token.charCodeAt(0) < 'c'.charCodeAt(0)));
				break;

				case 'Q':

				case 'q':
				this._tokens.add(new PathMarkupToken(PathMarkupTokenType.QuadraticBezier, this._token.charCodeAt(0) < 'q'.charCodeAt(0)));
				break;

				case 'S':

				case 's':
				this._tokens.add(new PathMarkupToken(PathMarkupTokenType.SmoothCubicBezier, this._token.charCodeAt(0) < 's'.charCodeAt(0)));
				break;

				case 'T':

				case 't':
				this._tokens.add(new PathMarkupToken(PathMarkupTokenType.SmoothQuadraticBezier, this._token.charCodeAt(0) < 't'.charCodeAt(0)));
				break;

				case 'A':

				case 'a':
				this._tokens.add(new PathMarkupToken(PathMarkupTokenType.Arc, this._token.charCodeAt(0) < 'a'.charCodeAt(0)));
				break;

				case 'Z':

				case 'z':
				this._tokens.add(new PathMarkupToken(PathMarkupTokenType.Close, this._token.charCodeAt(0) < 'z'.charCodeAt(0)));
				break;

			}

			if (this.isDigit(this._token)) {
				let inIntegers = true;
				let inFractions = false;
				let inExponent = false;
				let number: string = stringEmpty();
				let foundEnd = false;
				this._curIndex = this._curIndex - 1;
				while (this._curIndex < source.length) {
					let numPart = source.charAt(this._curIndex);
					if (inExponent) {
						if (!this.isDigit(numPart)) {
							foundEnd = true;
							break;
						} else {
							number += numPart;
							this._curIndex++;
							if (this._curIndex >= source.length) {
								foundEnd = true;
								break;
							}
						}
					} else if (inFractions) {
						if (numPart == 'e' || numPart == 'E') {
							inExponent = true;
							number += numPart;
							this._curIndex++;
							continue;
						}
						if (!this.isDigit(numPart)) {
							foundEnd = true;
							break;
						} else {
							number += numPart;
							this._curIndex++;
							if (this._curIndex >= source.length) {
								foundEnd = true;
								break;
							}
						}
					} else if (inIntegers) {
						if (numPart == '.') {
							inFractions = true;
							number += numPart;
							this._curIndex++;
							continue;
						}
						if (numPart == 'e' || numPart == 'E') {
							inExponent = true;
							number += numPart;
							this._curIndex++;
							continue;
						}
						if (!this.isDigit(numPart)) {
							foundEnd = true;
							break;
						} else {
							number += numPart;
							this._curIndex++;
							if (this._curIndex >= source.length) {
								foundEnd = true;
								break;
							}
						}
					}
				}
				if (foundEnd) {
					this._tokens.add(((() => {
						let $ret = new PathMarkupToken(PathMarkupTokenType.Number, false);
						$ret.value = parseFloat(number);
						return $ret;
					})()));
				}
			}
		}
		return this.buildGeometry();
	}
	private isDigit(curr: string): boolean {
		return curr == '.' || curr == '-' || curr == '+' || (curr.charCodeAt(0) >= '0'.charCodeAt(0) && curr.charCodeAt(0) <= '9'.charCodeAt(0));
	}
	private buildGeometry(): Geometry {
		this._curIndex = 0;
		let first = true;
		let pathGeometry: PathGeometry = new PathGeometry();
		let lastFigure: PathFigure = null;
		let lastCmd: PathMarkupTokenType = PathMarkupTokenType.None;
		let controlPoint1: Point = null;
		let controlPoint2: Point = null;
		let endPoint: Point = null;
		while (this._curIndex < this._tokens.count) {
			let token = this._tokens._inner[this._curIndex++];
			if (first && token.type != PathMarkupTokenType.Move) {
				return null;
			}
			switch (token.type) {
				case PathMarkupTokenType.Move:
				lastFigure = new PathFigure();
				pathGeometry.figures.add(lastFigure);
				this._lastPoint = this.readPoint(token.isAbsolute);
				lastFigure._startPoint = this._lastPoint;
				while (this.isNumber()) {
					this._lastPoint = this.readPoint(token.isAbsolute);
					lastFigure._segments.add(new LineSegment(0, this._lastPoint));
				}
				lastCmd = PathMarkupTokenType.Move;
				break;

				case PathMarkupTokenType.Line:

				case PathMarkupTokenType.Horizontal:

				case PathMarkupTokenType.Vertical:
				if (lastFigure == null) {
					return null;
				}
				do {
					switch (token.type) {
						case PathMarkupTokenType.Line:
						this._lastPoint = this.readPoint(token.isAbsolute);
						break;

						case PathMarkupTokenType.Horizontal:
						this._lastPoint.x = token.isAbsolute ? this.readNumber() : this._lastPoint.x + this.readNumber();
						break;

						case PathMarkupTokenType.Vertical:
						this._lastPoint.y = token.isAbsolute ? this.readNumber() : this._lastPoint.y + this.readNumber();
						break;

					}

					lastFigure._segments.add(new LineSegment(0, this._lastPoint));
				} while (this.isNumber());
				lastCmd = PathMarkupTokenType.Line;
				break;

				case PathMarkupTokenType.CubicBezier:

				case PathMarkupTokenType.SmoothCubicBezier:
				if (lastFigure == null) {
					return null;
				}
				do {
					if (token.type == PathMarkupTokenType.SmoothCubicBezier) {
						if (lastCmd == PathMarkupTokenType.CubicBezier) {
							controlPoint1 = <Point>{ $type: Point_$type, x: 2 * this._lastPoint.x - controlPoint2.x, y: 2 * this._lastPoint.y - controlPoint2.y };
						} else {
							controlPoint1 = this._lastPoint;
						}
					} else {
						controlPoint1 = this.readPoint(token.isAbsolute);
					}
					controlPoint2 = this.readPoint(token.isAbsolute);
					endPoint = this.readPoint(token.isAbsolute);
					lastFigure._segments.add(new BezierSegment(1, controlPoint1, controlPoint2, endPoint));
					this._lastPoint = endPoint;
					lastCmd = PathMarkupTokenType.CubicBezier;
				} while (this.isNumber());
				break;

				case PathMarkupTokenType.QuadraticBezier:

				case PathMarkupTokenType.SmoothQuadraticBezier: break;
				case PathMarkupTokenType.Arc:
				if (lastFigure == null) {
					return null;
				}
				do {
					let width: number = this.readNumber();
					let height: number = this.readNumber();
					let angle: number = this.readNumber();
					let isLargeArc: number = this.readNumber();
					let sweepDirection: number = this.readNumber();
					this._lastPoint = this.readPoint(token.isAbsolute);
					lastFigure._segments.add(((() => {
						let $ret = new ArcSegment();
						$ret.point = this._lastPoint;
						$ret.size = new Size(1, width, height);
						$ret.rotationAngle = angle;
						$ret.isLargeArc = isLargeArc == 1;
						$ret.sweepDirection = sweepDirection == 1 ? SweepDirection.Clockwise : SweepDirection.Counterclockwise;
						return $ret;
					})()));
				} while (this.isNumber());
				lastCmd = PathMarkupTokenType.Arc;
				break;

				case PathMarkupTokenType.Close:
				if (lastFigure == null) {
					return null;
				}
				lastFigure._isClosed = true;
				break;

			}

			first = false;
		}
		return pathGeometry;
	}
	private readPoint(isAbsolute: boolean): Point {
		let x = this.readNumber();
		let y = this.readNumber();
		if (!isAbsolute) {
			x += this._lastPoint.x;
			y += this._lastPoint.y;
		}
		return <Point>{ $type: Point_$type, x: x, y: y };
	}
	private readNumber(): number {
		let token = this._tokens._inner[this._curIndex++];
		if (token.type != PathMarkupTokenType.Number) {
			throw new InvalidOperationException(0);
		}
		return token.value;
	}
	private isNumber(): boolean {
		if (this._curIndex >= this._tokens.count) {
			return false;
		}
		return this._tokens._inner[this._curIndex].type == PathMarkupTokenType.Number;
	}
	private readToken(source: string): boolean {
		while (this._curIndex < source.length && this.isWhitespace(source.charAt(this._curIndex))) {
			this._curIndex++;
		}
		if (this._curIndex < source.length) {
			this._token = source.charAt(this._curIndex);
			this._curIndex++;
			return true;
		}
		return false;
	}
	private isWhitespace(v: string): boolean {
		return v == '\r' || v == '\n' || v == ' ' || v == '\t';
	}
}


