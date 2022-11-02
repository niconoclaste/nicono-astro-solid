import { Component } from "solid-js";
import { store, setStore } from '@utils/store';

export interface Props {
  layout: string;
  current: string;
}

export const Header: Component<Props> = (props) => {

	function switchLang(){
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
	}

  return <>

		<div style="width:100%;text-align:center">
			<div>Language : {store.lang == 'ja' && <strong>日本語</strong> || store.lang == 'en' && <strong>English</strong>}</div>
			<div>Layout : <strong>{props.layout}</strong></div>
			<div>Page : <strong>{props.current}</strong></div>
		{ store.lang === 'ja' && 
			<button onClick={switchLang} style="background:white;margin:5px;padding:5px;">SWITCH TO ENGLISH</button> 
		}
		{ store.lang === 'en' && 
			<button onClick={switchLang} style="background:white;margin:5px;padding:5px;">日本語に変更する</button>
		}
		</div>
	</>;
};