import { Component } from "solid-js";
import { store, setStore } from '@utils/store';

export interface Props {
  layout: string;
  current: string;
  translation: any;
}

export const Nav: Component<Props> = (props) => {

	const toggleNavi = () => setStore({naviIsopened:!store.naviIsopened});

	const switchLang = () => {
		if(store.lang === 'en'){
			window.localStorage.setItem('lang', 'ja');
			document.documentElement.setAttribute('lang', 'ja');
			const titleJaMeta = document.head.querySelector('meta[name="jaTitle"]') as HTMLMetaElement;
			const titleJa = titleJaMeta.content;
			document.title = titleJa;
			setStore({lang:'ja'});
		}else{
			window.localStorage.setItem('lang', 'en');
			document.documentElement.setAttribute('lang', 'en');
			const titleEnMeta = document.head.querySelector('meta[name="enTitle"]') as HTMLMetaElement;
			const titleEn = titleEnMeta.content;
			document.title = titleEn;
			setStore({lang:'en'});
		}
		toggleNavi();
	}



  return <ul>
    <li class={props.current === 'home' ? 'is-active' : ''}>
      <a href={props.current === 'home' ? '#top' : '/'} onClick={toggleNavi}>
				{props.translation.home.title[store.lang]}
			</a>
    </li>
    <li class={props.current === 'about' ? 'is-active' : ''}>
      <a href="/#about" onClick={toggleNavi}>
				{props.translation.about.title[store.lang]}
			</a>
    </li>
    <li class={props.current === 'works' ? 'is-active' : ''}>
      <a href="/#works" onClick={toggleNavi}>
				{props.translation.works.title[store.lang]}
			</a>
    </li>
    <li class={props.current === 'codes' ? 'is-active' : ''}>
      <a href="/#codes" onClick={toggleNavi}>
				{props.translation.codes.title[store.lang]}
			</a>
    </li>
    <li class={props.current === 'articles' ? 'is-active' : ''}>
      <a href={props.layout == 'single' ? '/articles' : '#articles'} onClick={toggleNavi}>
				{props.translation.articles.title[store.lang]}
			</a>
    </li>
		<li>
      <span>{props.translation.contact.title[store.lang]}</span>
      <ul>
        <li><a href="mailto:{email}" style="background-image:var(--logo_email)" title="{email}" onClick={toggleNavi}>email</a></li>
        <li><a href="https://twitter.com/NicoloNoClaste/" target="_blank" rel="noreferrer" title="twitter.com/NicoloNoClaste" style="background-image:var(--logo_twitter)" onClick={toggleNavi}>twitter</a></li>
        <li><a href="https://codepen.io/niconoclaste/" target="_blank" rel="noreferrer" title="codepen.io/niconoclaste" style="background-image:var(--logo_codepen)" onClick={toggleNavi}>codepen</a></li>
        <li><a href="https://github.com/niconoclaste" target="_blank" rel="noreferrer" title="github.com/niconoclaste" style="background-image:var(--logo_github)" onClick={toggleNavi}>github</a></li>
      </ul>
    </li>
		<li>
			{ store.lang === 'ja' && <button type="button" class="m-lang_btn" onClick={switchLang}>English</button>}
			{ store.lang === 'en' && <button type="button" class="m-lang_btn" onClick={switchLang}>日本語</button>}
		</li>
	</ul>;
};