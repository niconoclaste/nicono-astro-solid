import { createSignal, Component } from "solid-js";
import { createStore } from "solid-js/store";

export interface Props {
  layout: string;
  current: string;
}

export const Header: Component<Props> = (props) => {
	
	const [number, setnumber] = createStore({nb:5});
	const incrementNumber = () => setnumber({nb: number.nb + 1});
	const decrementNumber = () => setnumber({nb: number.nb > 0 ? number.nb - 1 : 0});

  const [count, setCount] = createSignal(5);
	const increment = () => setCount((nb) => nb + 1);
	const decrement = () => setCount((nb) => nb > 0 ? nb - 1 : 0);

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
	}

	const [l10n, setL10n] = createStore({lang: language});

	const langToEn = function(){
		window.localStorage.setItem('lang', 'en');
		document.documentElement.setAttribute('lang', 'en');
		const titleEnMeta = document.head.querySelector('meta[name="enTitle"]') as HTMLMetaElement;
		const titleEn = titleEnMeta.content;
		document.title = titleEn;
		setL10n({lang:'en'});
	}

	const langToJa = function(){
		window.localStorage.setItem('lang', 'ja');
		document.documentElement.setAttribute('lang', 'ja');
		const titleJaMeta = document.head.querySelector('meta[name="jaTitle"]') as HTMLMetaElement;
		const titleJa = titleJaMeta.content;
		document.title = titleJa;
		setL10n({lang:'ja'});
	}


  return <>

		<div style="width:100%;text-align:center">
			<div>Current language is {l10n.lang == 'ja' && <strong>日本語</strong> || l10n.lang == 'en' && <strong>English</strong>}</div>
		{ l10n.lang === 'ja' && 
			<button onClick={langToEn} data-lang="en" className="js-switch-lang" style="background:white;margin:5px;padding:5px;">SWITCH TO ENGLISH</button> 
		}
		{ l10n.lang === 'en' && 
			<button onClick={langToJa} data-lang="ja" className="js-switch-lang" style="background:white;margin:5px;padding:5px;">日本語に変更する</button>
		}
		</div>
	</>;
};