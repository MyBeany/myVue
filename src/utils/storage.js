//LocalStorage存储

export const setJsonLocalStorageItem = function(key, value) {
	localStorage.removeItem(key);
	var json = JSON.stringify(value);
	localStorage.setItem(key, json);
}

export const getJsonLocalStorageItem = function(key) {
	return JSON.parse(localStorage.getItem(key));
}

export const setStrLocalStorageItem = function(key, value) {
	localStorage.removeItem(key)
	localStorage.setItem(key, value)
}

export const getStrLocalStorageItem = function(key) {
	return localStorage.getItem(key)
}

export const removeLocalStorageItem = function(key) {
	localStorage.removeItem(key);
}
export const cleanLocalStorage = function() {
	localStorage.clear();
}


//SessionStorage  存储
export const setJsonSessionStorageItem = function(key, value) {
	sessionStorage.removeItem(key);
	var json = JSON.stringify(value);
	sessionStorage.setItem(key, json);
}

export const getJsonSessionStorageItem = function(key) {
	return JSON.parse(sessionStorage.getItem(key));
}

export const setStrSessionStorageItem = function(key, value) {
	sessionStorage.removeItem(key)
	sessionStorage.setItem(key, value)
}

export const getStrSessionStorageItem = function(key) {
	return sessionStorage.getItem(key)
}

export const removeSessionStorageItem = function(key) {
	sessionStorage.removeItem(key);
}
export const cleanSessionStorage = function() {
	sessionStorage.clear();
}
