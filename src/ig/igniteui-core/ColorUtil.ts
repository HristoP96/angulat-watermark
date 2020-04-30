/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { Color } from "./Color";
import { Random } from "./Random";
import { InterpolationMode } from "./InterpolationMode";
import { MathUtil } from "./MathUtil";
import { Brush } from "./Brush";
import { truncate } from "./number";

/**
 * @hidden 
 */
export class ColorUtil extends Base {
	static $t: Type = markType(ColorUtil, 'ColorUtil');
	private static r: Random = new Random(0);
	static randomColor(alpha: number): Color {
		return Color.fromArgb(alpha, <number>ColorUtil.r.next2(0, 255), <number>ColorUtil.r.next2(0, 255), <number>ColorUtil.r.next2(0, 255));
	}
	static randomHue(color: Color): Color {
		let ahsv: number[] = ColorUtil.getAHSV(color);
		return ColorUtil.fromAHSV(ahsv[0], <number>ColorUtil.r.next2(0, 359), ahsv[2], ahsv[3]);
	}
	static getInterpolation(minimum: Color, interpolation_: number, maximum_: Color, interpolationMode: InterpolationMode): Color {
		let min_ = minimum;
		switch (interpolationMode) {
			case InterpolationMode.HSV:
			{
				let b: number[] = ColorUtil.getAHSV(minimum);
				let e: number[] = ColorUtil.getAHSV(maximum_);
				let b1: number = b[1] >= 0 ? b[1] : e[1];
				let e1: number = e[1] >= 0 ? e[1] : b[1];
				if (b1 >= 0 && e1 >= 0 && Math.abs(e1 - b1) > 180) {
					if (e1 > b1) {
						b1 += 360;
					} else {
						e1 += 360;
					}
				}
				interpolation_ = Math.max(0, Math.min(1, interpolation_));
				return ColorUtil.fromAHSV(b[0] + interpolation_ * (e[0] - b[0]), b1 + interpolation_ * (e1 - b1), b[2] + interpolation_ * (e[2] - b[2]), b[3] + interpolation_ * (e[3] - b[3]));
			}

			case InterpolationMode.RGB: return Color.fromArgb(<number>((<any>min_)._a + interpolation_ * ((<any>maximum_)._a - (<any>min_)._a)), <number>((<any>min_)._r + interpolation_ * ((<any>maximum_)._r - (<any>min_)._r)), <number>((<any>min_)._g + interpolation_ * ((<any>maximum_)._g - (<any>min_)._g)), <number>((<any>min_)._b + interpolation_ * ((<any>maximum_)._b - (<any>min_)._b)));
		}

		return minimum;
	}
	static getAHSVInterpolation(minimum: number[], interpolation: number, maximum: number[]): Color {
		let b1: number = minimum[1] >= 0 ? minimum[1] : maximum[1];
		let e1: number = maximum[1] >= 0 ? maximum[1] : minimum[1];
		if (b1 >= 0 && e1 >= 0 && Math.abs(e1 - b1) > 180) {
			if (e1 > b1) {
				b1 += 360;
			} else {
				e1 += 360;
			}
		}
		interpolation = Math.max(0, Math.min(1, interpolation));
		return ColorUtil.fromAHSV(minimum[0] + interpolation * (maximum[0] - minimum[0]), b1 + interpolation * (e1 - b1), minimum[2] + interpolation * (maximum[2] - minimum[2]), minimum[3] + interpolation * (maximum[3] - minimum[3]));
	}
	static getLightened(color: Color, interpolation: number): Color {
		let ahsl: number[] = ColorUtil.getAHSL(color);
		if (interpolation < 0) {
			return ColorUtil.fromAHSL(ahsl[0], ahsl[1], ahsl[2], ahsl[3] * (1 - MathUtil.clamp(-interpolation, 0, 1)));
		} else {
			return ColorUtil.fromAHSL(ahsl[0], ahsl[1], ahsl[2], ahsl[3] + MathUtil.clamp(interpolation, 0, 1) * (1 - ahsl[3]));
		}
	}
	static getAHSL(color: Color): number[] {
		let ahsl: number[] = <number[]>new Array(4);
		let r: number = color.r / 255;
		let g: number = color.g / 255;
		let b: number = color.b / 255;
		let min: number = Math.min(Math.min(r, g), b);
		let max: number = Math.max(Math.max(r, g), b);
		let delta: number = max - min;
		ahsl[0] = color.a / 255;
		ahsl[3] = (max + min) / 2;
		if (delta == 0) {
			ahsl[1] = -1;
			ahsl[2] = 0;
		} else {
			ahsl[1] = ColorUtil.h(max, delta, r, g, b);
			ahsl[2] = ahsl[3] < 0.5 ? delta / (max + min) : delta / (2 - max - min);
		}
		return ahsl;
	}
	static getAHSV(color: Color): number[] {
		let a: number = color.a / 255;
		let r: number = color.r / 255;
		let g: number = color.g / 255;
		let b: number = color.b / 255;
		let min: number = Math.min(r, Math.min(g, b));
		let max: number = Math.max(r, Math.max(g, b));
		let delta: number = max - min;
		let ahsv: number[] = <number[]>new Array(4);
		ahsv[0] = a;
		ahsv[3] = max;
		if (delta == 0) {
			ahsv[1] = -1;
			ahsv[2] = 0;
		} else {
			ahsv[1] = ColorUtil.h(max, delta, r, g, b);
			ahsv[2] = delta / max;
		}
		return ahsv;
	}
	static fromAHSL(alpha: number, hue: number, saturation: number, lightness: number): Color {
		let r: number;
		let g: number;
		let b: number;
		if (saturation == 0) {
			r = lightness;
			g = lightness;
			b = lightness;
		} else {
			let q: number = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - (lightness * saturation);
			let p: number = 2 * lightness - q;
			let hk: number = hue / 360;
			r = ColorUtil.c(p, q, hk + 1 / 3);
			g = ColorUtil.c(p, q, hk);
			b = ColorUtil.c(p, q, hk - 1 / 3);
		}
		return Color.fromArgb(<number>truncate((alpha * 255)), <number>truncate((r * 255)), <number>truncate((g * 255)), <number>truncate((b * 255)));
	}
	static fromAHSV(alpha: number, hue: number, saturation: number, value: number): Color {
		let r: number;
		let g: number;
		let b: number;
		while (hue >= 360) {
			hue -= 360;
		}
		if (saturation == 0) {
			r = value;
			g = value;
			b = value;
		} else {
			hue /= 60;
			let i: number = Math.floor(hue);
			let f: number = hue - i;
			let p: number = value * (1 - saturation);
			let q: number = value * (1 - saturation * f);
			let t: number = value * (1 - saturation * (1 - f));
			switch (<number>truncate(i)) {
				case 0:
				r = value;
				g = t;
				b = p;
				break;

				case 1:
				r = q;
				g = value;
				b = p;
				break;

				case 2:
				r = p;
				g = value;
				b = t;
				break;

				case 3:
				r = p;
				g = q;
				b = value;
				break;

				case 4:
				r = t;
				g = p;
				b = value;
				break;

				default:
				r = value;
				g = p;
				b = q;
				break;

			}

		}
		return Color.fromArgb(<number>truncate((alpha * 255)), <number>truncate((r * 255)), <number>truncate((g * 255)), <number>truncate((b * 255)));
	}
	private static h(max: number, delta: number, r: number, g: number, b: number): number {
		let h: number = r == max ? (g - b) / delta : g == max ? 2 + (b - r) / delta : 4 + (r - g) / delta;
		h *= 60;
		if (h < 0) {
			h += 360;
		}
		return h;
	}
	private static c(p: number, q: number, t: number): number {
		t = t < 0 ? t + 1 : t > 1 ? t - 1 : t;
		if (t < 1 / 6) {
			return p + ((q - p) * 6 * t);
		}
		if (t < 1 / 2) {
			return q;
		}
		if (t < 2 / 3) {
			return p + ((q - p) * 6 * (2 / 3 - t));
		}
		return p;
	}
	static colorToInt(color: Color): number {
		let aa: number = color.a / 255;
		let rr: number = <number>truncate((color.r * aa));
		let gg: number = <number>truncate((color.g * aa));
		let bb: number = <number>truncate((color.b * aa));
		return color.a << 24 | rr << 16 | gg << 8 | bb;
	}
	static getColor(brush: Brush): Color {
		return brush.color;
	}
	static fromString(colorFormat: string): Color {
		let c: Color = new Color();
		c.colorString = colorFormat;
		return c;
	}
	static fromBrush(brush: Brush): Color {
		let ret = ((() => {
			let $ret = new Color();
			$ret.a = 255;
			return $ret;
		})());
		ret = ColorUtil.fromString(brush._fill);
		return ret;
	}
	static toBrush(color: Color): Brush {
		let brush: Brush = null;
		let colorStr = color.colorString;
		brush = ((() => {
			let $ret = new Brush();
			$ret.fill = colorStr;
			return $ret;
		})());
		return brush;
	}
}


