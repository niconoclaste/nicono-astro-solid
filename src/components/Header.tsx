import { Component, onMount, createSignal } from "solid-js";
import { store, setStore } from '@utils/store';

import { Nav } from '@components/Nav';

export interface Props {
  layout: string;
  current: string;
	translation: any;
}

onMount(async () => {
	let language = 'en';
	if(typeof window !== 'undefined' && window !== null){
		const urlSearchParams = new URLSearchParams(window.location.search);
		const params = Object.fromEntries(urlSearchParams.entries());
		if(params.lang){
			language = params.lang;
		}else{
			const localLang = window.localStorage.getItem('lang');
			if(localLang){
				language = localLang;
			}else{
				language = window.navigator.language;
			}
		}
		if(language !== 'ja'){
			language = 'en';
		}
		if(language == 'ja'){
			document.documentElement.setAttribute('lang', 'ja');
			window.localStorage.setItem('lang', 'ja');
			const titleJaMeta = document.head.querySelector('meta[name="jaTitle"]') as HTMLMetaElement;
			const titleJa = titleJaMeta.content
			document.title = titleJa;
			setStore({lang:'ja'});
		}
	}
});

export const Header: Component<Props> = (props) => {

	const toggleNavi = () => setStore({naviIsopened:!store.naviIsopened});

  return <>
	<header class="g-header">
		<nav class="g-navigation" tabindex="0">
			<button class={store.naviIsopened ? 'm-hamburger is-closed' : 'm-hamburger'} onClick={toggleNavi}>
				<i></i><i></i><i></i>
			</button>
			<div class="g-navigation_container">
				<Nav layout={props.layout} current={props.current} translation={props.translation} />
			</div>
		</nav>
	</header>

	<aside class="g-aside">
		<h1>
			<a href={props.current === 'home' ? '#top' : '/'}>NicoNoClaste</a>
			<span>WEB DEVELOPER ・ ウェブデベロッパー</span>
		</h1>
	</aside>
	</>;
};