const htmlDecode = (text) => new DOMParser().parseFromString(text, "text/html").documentElement.textContent;

export default htmlDecode