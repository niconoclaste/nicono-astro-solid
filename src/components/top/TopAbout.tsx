import { Component } from "solid-js";
import { store } from '@utils/store';

export const TopAbout: Component = () => {
	return <section class="l-section">
		{ store.lang === 'en' && <>
			<p><strong>Nicolas</strong> (NicoNoClaste)</p>
			<p>born in <strong>Paris</strong> living in <strong>Tokyo</strong></p>
			<p>10+ years <strong>Web Developer</strong></p>
		</>}
		{ store.lang === 'ja' && <>
			<p><strong>二コラ</strong> (ニコのクラスト)</p>
			<p><strong>パリ</strong>生まれ <strong>東京</strong>在住</p>
			<p>10年+ <strong>ウェブデベロッパー</strong></p>
		</>}
		<p>
			HTML&nbsp;<strong>CSS</strong>&nbsp;SCSS <strong>JavaScript</strong>&nbsp;TypeScript<br />
			<strong>Svelte</strong>&nbsp;SvelteKit <strong>Vue.js</strong>&nbsp;Nuxt <br />
			<strong>Astro</strong>&nbsp;SolidJS <strong>11ty</strong>&nbsp;Alpine.js<br />
			<strong>PHP</strong> SQL&nbsp;<strong>WordPress</strong> ...
		</p>
	</section>;
};