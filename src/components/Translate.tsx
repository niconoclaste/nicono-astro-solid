import { Component } from "solid-js";
import { createStore } from "solid-js/store";

export interface Props {
  en: string;
  ja: string;
}

export const Translate: Component<Props> = (props) => {
	const [l10n, setL10n] = createStore({lang: 'en'});
	let language = document.documentElement.getAttribute('lang');
	setL10n({lang:language});
	// let language = 'en';
	// if(typeof window !== 'undefined' && window !== null){
	// 	const urlSearchParams = new URLSearchParams(window.location.search);
	// 	const params = Object.fromEntries(urlSearchParams.entries());
	// 	if(params.lang){
	// 		language = params.lang;
	// 	}else{
	// 		const localLang = window.localStorage.getItem('lang');
	// 		if(localLang){
	// 			language = localLang;
	// 		}else{
	// 			language = window.navigator.language;
	// 		}
	// 	}
	// 	if(language !== 'ja'){
	// 		language = 'en';
	// 		setL10n({lang:'en'});
	// 	}else{
	// 		setL10n({lang:'ja'});
	// 	}
	// }

	document.addEventListener('click', function(e){
		if(e.target && (e.target as Element).classList.contains('js-switch-lang')){
			const button = e.target as Element;
			const selectedLang = button.getAttribute('data-lang');
			if(selectedLang !== l10n.lang){
				setL10n({lang:selectedLang});
			}
		}
	});

  return <>
		{l10n.lang === 'en' && props.en || l10n.lang === 'ja' && props.ja}
	</>;
};