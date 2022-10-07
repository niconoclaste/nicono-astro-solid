let lang = 'en';
if(typeof window !== 'undefined' && window !== null){
	const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	if(params.lang){
		lang = params.lang;
	}else{
		const localLang = window.localStorage.getItem('lang');
		if(localLang){
			lang = localLang;
		}else{
			lang = window.navigator.language;
		}
	}
	if(lang !== 'ja'){
		lang = 'en';
	}
}

const targetNode = document.documentElement;
const config = { attributes: true, childList: false, subtree: false };
const callback = (mutationList, observer) => {
	for (const mutation of mutationList) {
		if (mutation.type === 'attributes') {
			lang = targetNode.getAttribute('lang');
			// setL10n({lang:language});
			//  const lang = language;
		}
	}
};
const observer = new MutationObserver(callback);
export const language = lang;
// export const language = observer.observe(targetNode, config) || lang;