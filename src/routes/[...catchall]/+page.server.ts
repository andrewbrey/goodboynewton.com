import { invariant } from "$lib";
import { PHOTOS } from "$lib/photos";
import { faker } from "@faker-js/faker";
import {
	format,
	formatDistanceStrict,
	formatISO,
	getDayOfYear,
	getYear,
	isSameDay,
	parseISO,
	setYear
} from "date-fns";
import type { PageServerLoad } from "./$types";

export const load = (async ({ request }) => {
	// Everyone lives in the Pacific Northwest :)
	// Note, setting this here because Vercel doesn't let you set it as a global env var :shrug:
	process.env.TZ = "America/Los_Angeles";

	const url = new URL(request.url);
	const urlDoy = url.searchParams.get("doy");
	const today = new Date();
	const calDoy = getDayOfYear(today);
	const urlImg = url.searchParams.get("img");

	const doy = urlDoy ? parseInt(urlDoy) : calDoy;
	let idx = (doy - 1) % PHOTOS.length;

	let photo = PHOTOS.at(idx) ?? PHOTOS.at(0);
	if (urlImg) {
		idx = PHOTOS.findIndex((p) => p.img === urlImg);
		photo = PHOTOS.at(idx);
	}

	invariant(typeof photo !== "undefined");

	const newtonBirthday = parseISO("2013-02-04");
	const parsedDate = parseISO(photo.date);
	const prettyDate = format(parsedDate, "EEEE, LLLL do, yyyy");
	const isoDate = formatISO(parsedDate);
	const newtonAge = `${formatDistanceStrict(newtonBirthday, parsedDate, {
		roundingMethod: "floor"
	})} old`;
	const isBirthday = isSameDay(setYear(newtonBirthday, getYear(today)), today);
	const confetti = isBirthday
		? new Array(150).fill(0).map(() => ({
				color: faker.color.rgb({ prefix: "#", casing: "lower" }),
				delay: `${faker.number.int({ min: 40, max: 400 })}ms`,
				duration: `${faker.number.int({ min: 400, max: 1400 })}ms`,
				left: `${faker.number.int({ min: 0, max: 100 })}vw`,
				rotate: `${faker.number.int({ min: 0, max: 180 })}deg`
			}))
		: undefined;

	return {
		...photo,
		isoDate,
		prettyDate,
		newtonAge,
		isBirthday,
		confetti,
		calDoy,
		idx
	};
}) satisfies PageServerLoad;
