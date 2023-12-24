import { invariant } from "$lib";
import { PHOTOS } from "$lib/photos";
import { format, formatDistanceStrict, formatISO, getDayOfYear, parseISO } from "date-fns";
import type { PageServerLoad } from "./$types";

export const load = (async ({ request }) => {
	const url = new URL(request.url);
	const urlDoy = url.searchParams.get("doy");
	const calDoy = getDayOfYear(new Date());
	const urlImg = url.searchParams.get("img");

	const doy = urlDoy ? parseInt(urlDoy) : calDoy;
	let idx = doy - 1;
	while (idx >= PHOTOS.length) {
		idx -= PHOTOS.length;
	}

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

	return {
		...photo,
		isoDate,
		prettyDate,
		newtonAge,
		calDoy,
		idx
	};
}) satisfies PageServerLoad;
