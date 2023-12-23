<script lang="ts">
import { dev } from "$app/environment";
import { page } from "$app/stores";
import { CldImage, CldOgImage } from "svelte-cloudinary";
import type { PageData } from "./$types";

export let data: PageData;

function next(e: KeyboardEvent) {
	if (dev) {
		const current =
			document.querySelector<HTMLDivElement>("[data-doyidx]")?.dataset["doyidx"] ?? "0";

		const next = parseInt(current) + 2; // doy is 1-indexed, so add 2
		const previous = parseInt(current); // doy is 1-indexed, so current photo idx _is_ previous doy

		switch (e.key) {
			case "n": {
				$page.url.searchParams.delete("img");
				$page.url.searchParams.set("doy", `${next}`);
				window.location.href = $page.url.href;
				break;
			}
			case "p": {
				$page.url.searchParams.delete("img");
				$page.url.searchParams.set("doy", `${previous}`);
				window.location.href = $page.url.href;
				break;
			}
			case "t": {
				$page.url.searchParams.delete("img");
				$page.url.searchParams.delete("doy");
				window.location.href = $page.url.href;
				break;
			}
			default: {
				break;
			}
		}
	}
}
</script>

<CldOgImage
	width={1200}
	height={630}
	gravity="faces"
	src="sdpiecctr25onoyeib8m"
	title="Good Boy Newton · Newton is a very good boy."
	twitterTitle="Good Boy Newton · Newton is a very good boy."
/>

<svelte:window on:keydown={next} />

<div
	class="grid min-h-dvh w-screen overflow-x-hidden xl:h-dvh xl:overflow-hidden"
	data-caldoy={data.calDoy}
	data-doyidx={data.idx}
	data-img={data.img}
	style="--accent:{data.bg};--brand-opacity: 0.2;"
>
	<header
		class="absolute right-2 top-6 z-10 md:right-3 md:top-8 lg:right-4 lg:top-10 xl:left-1 xl:right-auto xl:top-10 3xl:left-4 3xl:top-[4.5rem]"
	>
		<div
			class="rotate-12 rounded-[3vw] bg-[color-mix(in_srgb,var(--accent),transparent_50%)] px-4 py-3 shadow shadow-accent backdrop-blur-sm md:px-6 md:py-5 xl:-rotate-12 xl:px-10 xl:py-4 3xl:px-12 3xl:py-6"
		>
			<h1
				class="text-center font-display text-lg leading-none text-white md:text-3xl md:leading-none lg:text-4xl xl:text-4xl 3xl:text-6xl"
			>
				Good Boy Newton
			</h1>
			<p
				class="d:leading-none text-center text-xs leading-none text-[color-mix(in_srgb,var(--accent)_30%,#fff)] md:text-lg lg:text-xl xl:text-xl 3xl:text-4xl"
			>
				Newton is a <span class="italic underline">very</span> good boy.
			</p>
		</div>
	</header>
	<main class="flex h-full flex-col xl:grid xl:grid-cols-2">
		<div class="flex-grow-0">
			<CldImage
				src={data.img}
				alt={data.alt}
				width={10000}
				height={10000}
				priority={true}
				gravity={data.imgGravity}
				decoding="sync"
				loading="eager"
				fetchpriority="high"
				sizes="(min-width:1920px) 3200px, (min-width:1080px) 2000px, (min-width:768px) 1200px"
				class="pointer-events-none h-full min-h-[420px] w-full select-none object-cover text-transparent"
			/>
		</div>
		<div
			class="flex-grow border-t-4 border-accent bg-[color-mix(in_srgb,var(--accent)_10%,#fff)] md:border-t-[6px] lg:border-t-8 xl:grid xl:place-items-start xl:border-l-8 xl:border-t-0 xl:bg-transparent xl:pt-10 3xl:border-l-[12px]"
		>
			<div
				class="h-full p-6 pb-10 md:p-8 md:pb-12 lg:p-10 lg:pb-12 xl:h-1/2 xl:w-full xl:p-12 3xl:p-16"
			>
				<h2
					class="font-display text-3xl text-accent md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-[10rem]"
				>
					{data.title}
				</h2>
				<div
					class="flex flex-wrap gap-2 text-sm italic text-[color-mix(in_srgb,var(--accent)_65%,#fff)] md:text-lg lg:text-xl xl:text-2xl xl:text-[color-mix(in_srgb,var(--accent)_90%,#fff)] 2xl:text-3xl 3xl:text-5xl"
				>
					<time datetime={data.isoDate}>{data.prettyDate}</time>
					<span class="font-bold">&middot;</span>
					<span>{data.where}</span>
					<span class="font-bold">&middot;</span>
					<span>{data.newtonAge}</span>
				</div>
				<p
					class="mt-6 text-xl md:mt-8 md:max-w-screen-md md:text-2xl lg:mt-10 lg:max-w-screen-lg lg:text-3xl xl:mt-12 xl:text-4xl xl:leading-normal xl:text-accent 2xl:mt-12 2xl:text-5xl 2xl:leading-relaxed 3xl:mt-32 3xl:max-w-screen-2xl 3xl:text-8xl 3xl:leading-normal"
				>
					{data.text}
				</p>
			</div>
		</div>
	</main>
</div>
