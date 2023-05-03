let browser_info = {
    browser_name: 'Browser: ' + navigator.appCodeName + " ",
    version: "Verison: " + navigator.appVersion + " ",
    core_name: "CoreName: " + navigator.appName + " ",
    buid_id: "ID: " + navigator.buildID + " ",
    language: "Language: " + navigator.language,
    OS: "OS: " + navigator.oscpu,
    platform: "User OS: " + navigator.platform,

    getBrowserName: function()
    {
      return this.browser_name;
    },

    getBrowserVersion: function()
    {
      return this.version;
    },

    getBrowserCoreName: function()
    {
      return this.core_name;
    },
    getBrowserID: function()
    {
      return this.buid_id;
    },

    getBrowserLanguage: function()
    {
      return this.language;
    },
    getOSInfo: function()
    {
      return this.OS;
    },
    getUserOS: function()
    {
      return this.platform;
    },

  };

let __browser__ = {
  get__browser__ : "Browser Info : " + navigator.userAgent
}

function isOnline(){
  return "Online Status: " +  navigator.onLine;
}

let createConsoleStatus =
{
  Error(e){
    console.error(e)
  },
  Warning(e){
    console.warn(e)
  },
  Info(e){
    console.info(e)
  }
}
function clearConsole()
{
  return console.clear();
}


function GetIP(){
return window.fetch("https://api.ipify.org?format=json")
.then(res=>res.json()).then(data=>console.log("IP: " + data.ip))
}

function GetAPI(key)
{
  return window.fetch(key)
  .then(res=>res.json())
  .then(data => console.log(data))
  .catch(error => console.log("Incorrect api Path or invalid input"));
}


function GeneratePassword(e) {
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let password_length = e;
var password = "";

for (var i = 0; i <= password_length; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
    console.log(password);
}

function GeneratePasswordLoop(e) {
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let password_length = e;
var password = "";

for (var i = 0; i <= password_length; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
  console.log(password);
}

}

function GetHostName()
{
  console.log(window.location.host);
}
function getProtocol()
{
  console.log(window.location.protocol);
}

///////////////////////////////////////////////////////////////////////////
function bubbleSort(array) {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

function selectionSort(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [array[minIndex], array[i]] = [array[i], array[minIndex]];
    }
  }

  return array;
}

function insertionSort(array) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j--;
    }
  }

  return array;
}

function mergeSort(array) {
  const n = array.length;
  if (n <= 1) {
    return array;
  }
  const mid = Math.floor(n / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function quickSort(array) {
  const n = array.length;
  if (n <= 1) {
    return array;
  }
  const pivotIndex = Math.floor(n / 2);
  const pivot = array[pivotIndex];
  const [left, right] = partition(array, pivot);
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);
  return sortedLeft.concat(pivot, sortedRight);
}

function partition(array, pivot) {
  const left = [];
  const right = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    }
  }

  return [left, right];
}

function radixSort(arr) {
  if (arr.length === 0) return arr;

  const getMaxDigitCount = (arr) => {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
  };

  const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  };

  const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  };

  const maxDigitCount = getMaxDigitCount(arr);

  for (let k = 0; k < maxDigitCount; k++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

function heapSort(array) {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    eaplex_heapify(array, array.length, i);
  }


  for (let i = array.length - 1; i >= 0; i--) {
    const temp = array[0];
    array[0] = array[i];
    array[i] = temp;

  heapify(array, i, 0);
  }

  return array;
}

function heapify(array, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    const temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;

    heapify(array, n, largest);
  }
}

function bogosort(arr) {
  while (!isSorted(arr)) {
    shuffle(arr);
  }
  return arr;
}

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function jumpSearch(arr, target) {
  const blockSize = Math.floor(Math.sqrt(arr.length));
  let blockStart = 0;
  let blockEnd = blockSize;

  while (blockEnd < arr.length && arr[blockEnd] < target) {
    blockStart = blockEnd;
    blockEnd += blockSize;
  }

  for (let i = blockStart; i <= Math.min(blockEnd, arr.length - 1); i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    const pos = Math.floor(
      low + ((high - low) / (arr[high] - arr[low])) * (target - arr[low])
    );
    if (arr[pos] === target) {
      return pos;
    } else if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }

  return -1;
}

function exponentialSearch(arr, target) {
  if (arr[0] === target) {
    return 0;
  }

  let i = 1;
  while (i < arr.length && arr[i] <= target) {
    i *= 2;
  }

  const left = Math.floor(i / 2);
  const right = Math.min(i, arr.length - 1);

  return e_binarySearch(arr, target, left, right);
}

function e_binarySearch(arr, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function findMax(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > min) {
      min = arr[i];
    }
  }
  return min;
}

function findSize(arr)
{
  return arr.length;
}
 function findType(e)
 {
   return typeof e;
 }

 function Min(e,arg)
 {
 	return Math.min(e,arg);
 }
 function Max(e,arg)
 {
 	return Math.max(e,arg);
 }

 function MinMany(...e)
 {
 	return Math.min(...e);
 }
 function MaxMany(...e)
 {
 	return Math.max(...e);
 }

 function GetRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const RandomNumberGenerator = {
  integer: GetRandomNumber,
  float: function(min, max, decimals) {
    const rand = Math.random() * (max - min) + min;
    const power = Math.pow(10, decimals || 0);
    return Math.floor(rand * power) / power;
  }
};

function RandomStringGenerator(e) {
var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let characters_length = e;
var characters = "";

for (var i = 0; i <= characters_length; i++) {
    var randomCharacters = Math.floor(Math.random() * chars.length);
    characters += chars.substring(randomCharacters, randomCharacters +1);
  }
    console.log(characters);
}

function CalculateTimeComplexity(e)
{
  let t_start = performance.now();
  e();
  let t_stop = performance.now();

  return (t_stop - t_start)/1000;
}

///////////////////////////////////////////////////

let math = {
  factorial: function(n)  {
  if (n < 0) {
    return undefined;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
},//factorial

 fibonacci: function(n) {
  if (n < 1) {
    return undefined;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  let prev1 = 1;
  let prev2 = 1;
  let fib = 0;
  for (let i = 3; i <= n; i++) {
    fib = prev1 + prev2;
    prev1 = prev2;
    prev2 = fib;
  }
  return fib;
},//fibboacci

}

function convertLength(value, fromUnit, toUnit) {
  const conversionFactors = {
    'm': {'km': 0.001, 'cm': 100, 'mm': 1000, 'mi': 0.000621371, 'yd': 1.09361, 'ft': 3.28084, 'in': 39.3701},
    'km': {'m': 1000, 'cm': 100000, 'mm': 1000000, 'mi': 0.621371, 'yd': 1093.61, 'ft': 3280.84, 'in': 39370.1},
    'cm': {'m': 0.01, 'km': 0.00001, 'mm': 10, 'mi': 0.0000062137, 'yd': 0.0109361, 'ft': 0.0328084, 'in': 0.393701},
    'mm': {'m': 0.001, 'km': 0.000001, 'cm': 0.1, 'mi': 0.00000062137, 'yd': 0.00109361, 'ft': 0.00328084, 'in': 0.0393701},
    'mi': {'m': 1609.34, 'km': 1.60934, 'cm': 160934, 'mm': 1609340, 'yd': 1760, 'ft': 5280, 'in': 63360},
    'yd': {'m': 0.9144, 'km': 0.0009144, 'cm': 91.44, 'mm': 914.4, 'mi': 0.000568182, 'ft': 3, 'in': 36},
    'ft': {'m': 0.3048, 'km': 0.0003048, 'cm': 30.48, 'mm': 304.8, 'mi': 0.000189394, 'yd': 0.333333, 'in': 12},
    'in': {'m': 0.0254, 'km': 0.0000254, 'cm': 2.54, 'mm': 25.4, 'mi': 0.0000157828, 'yd': 0.0277778, 'ft': 0.0833333}
  };

  const fromFactor = conversionFactors[fromUnit][toUnit];
  const toFactor = conversionFactors[toUnit][fromUnit];
  const convertedValue = value * fromFactor;

  return {
    value: convertedValue,
    unit: toUnit,
    fromUnit,
    toUnit,
    converted: true,
  };
}

function convertTemperature(temperature, fromUnit, toUnit) {
  if (fromUnit === toUnit) {
    return temperature;
  }

  const temperatureUnits = {
    celsius: {
      kelvin: function(c) { return c + 273.15; },
      fahrenheit: function(c) { return (c * (9 / 5)) + 32; }
    },
    kelvin: {
      celsius: function(k) { return k - 273.15; },
      fahrenheit: function(k) { return ((k - 273.15) * (9 / 5)) + 32; }
    },
    fahrenheit: {
      celsius: function(f) { return (f - 32) * (5 / 9); },
      kelvin: function(f) { return ((f - 32) * (5 / 9)) + 273.15; }
    }
  };

  const convertedTemperature = temperatureUnits[fromUnit][toUnit](temperature);
  return convertedTemperature.toFixed(2);
}

function convertFrequency(freq, fromUnit, toUnit) {
  if (fromUnit === toUnit) {
    return freq;
  }

  const frequencyUnits = {
    hertz: {
      kilohertz: function(hz) { return hz / 1000; },
      megahertz: function(hz) { return hz / 1000000; },
      gigahertz: function(hz) { return hz / 1000000000; },
    },
    kilohertz: {
      hertz: function(khz) { return khz * 1000; },
      megahertz: function(khz) { return khz / 1000; },
      gigahertz: function(khz) { return khz / 1000000; },
    },
    megahertz: {
      hertz: function(mhz) { return mhz * 1000000; },
      kilohertz: function(mhz) { return mhz * 1000; },
      gigahertz: function(mhz) { return mhz / 1000; },
    },
    gigahertz: {
      hertz: function(ghz) { return ghz * 1000000000; },
      kilohertz: function(ghz) { return ghz * 1000000; },
      megahertz: function(ghz) { return ghz * 1000; },
    },
  };

  const convertFunc = frequencyUnits[fromUnit][toUnit];
  if (convertFunc) {
    return convertFunc(freq);
  } else {
    throw new Error(`Conversion from ${fromUnit} to ${toUnit} is not supported.`);
  }
}
///////////////////////////////////////////////////////

function SortArray(arr, sortType) {
  const length = arr.length;
  let i, j, temp;

  switch (sortType) {
    case "bubble":
      for (i = 0; i < length - 1; i++) {
        for (j = 0; j < length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
      break;
    case "selection":
      for (i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (j = i + 1; j < length; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }
        }
        if (minIndex !== i) {
          temp = arr[i];
          arr[i] = arr[minIndex];
          arr[minIndex] = temp;
        }
      }
      break;
    case "insertion":
      for (i = 1; i < length; i++) {
        temp = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > temp) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = temp;
      }
      break;
    case "merge":
      function merge(left, right) {
        let result = [];
        while (left.length && right.length) {
          if (left[0] <= right[0]) {
            result.push(left.shift());
          } else {
            result.push(right.shift());
          }
        }
        while (left.length) {
          result.push(left.shift());
        }
        while (right.length) {
          result.push(right.shift());
        }
        return result;
      }

      function mergeSort(arr) {
        if (arr.length <= 1) {
          return arr;
        }
        let middle = Math.floor(arr.length / 2);
        let left = arr.slice(0, middle);
        let right = arr.slice(middle);
        return merge(mergeSort(left), mergeSort(right));
      }

      arr = mergeSort(arr);
      break;
    case "quick":
      function partition(arr, left, right) {
        let pivot = arr[Math.floor((right + left) / 2)];
        while (left <= right) {
          while (arr[left] < pivot) {
            left++;
          }
          while (arr[right] > pivot) {
            right--;
          }
          if (left <= right) {
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
          }
        }
        return left;
      }

      function quickSort(arr, left, right) {
        let index;
        if (arr.length > 1) {
          index = partition(arr, left, right);
          if (left < index - 1) {
            quickSort(arr, left, index - 1);
          }
          if (index < right) {
            quickSort(arr, index, right);
          }
        }
        return arr;
      }

      arr = quickSort(arr, 0, length - 1);
      break;
    default:
      console.log("Invalid sort type");
  }

  return arr;
}

function search(arr, value, type) {
  // Linear search
  if (type === 'linear') {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return i;
      }
    }
  }
  
  // Binary search
  if (type === 'binary') {
    var low = 0;
    var high = arr.length - 1;
    
    while (low <= high) {
      var mid = Math.floor((low + high) / 2);
      
      if (arr[mid] === value) {
        return mid;
      } else if (arr[mid] < value) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  
  // Jump search
  if (type === 'jump') {
    var jumpSize = Math.floor(Math.sqrt(arr.length));
    var left = 0;
    var right = 0;
    
    while (right < arr.length && arr[right] < value) {
      left = right;
      right += jumpSize;
    }
    
    for (var i = left; i <= Math.min(right, arr.length - 1); i++) {
      if (arr[i] === value) {
        return i;
      }
    }
  }
  
  // Interpolation search
  if (type === 'interpolation') {
    var lo = 0;
    var hi = arr.length - 1;
    
    while (lo <= hi && value >= arr[lo] && value <= arr[hi]) {
      var pos = lo + Math.floor((value - arr[lo]) * (hi - lo) / (arr[hi] - arr[lo]));
      
      if (arr[pos] === value) {
        return pos;
      } else if (arr[pos] < value) {
        lo = pos + 1;
      } else {
        hi = pos - 1;
      }
    }
  }
  
  // Exponential search
  if (type === 'exponential') {
    var bound = 1;
    
    while (bound < arr.length && arr[bound] < value) {
      bound *= 2;
    }
    
    var left = Math.floor(bound / 2);
    var right = Math.min(bound, arr.length - 1);
    
    while (left <= right) {
      var mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === value) {
        return mid;
      } else if (arr[mid] < value) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  
  return -1; // Not found
}
///////////////////////////////////////////////////////////

function createMultidimensionalArray(rows, cols) {
  var arr = new Array(rows);
  for (var i = 0; i < rows; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}


function GenerateRandomHex() {
  var hex = "#";
  var Chars = "0123456789ABCDEF";
  
  for (var i = 0; i < 6; i++) {
    var randomIndex = Math.floor(Math.random() * Chars.length);
    hex += Chars.charAt(randomIndex);
  }
  
  return hex;
}

function GenerateRandomKey(keyLength) {
  var key = "";
  var Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  for (var i = 0; i < keyLength; i++) {
    var randomIndex = Math.floor(Math.random() * Chars.length);
    key += Chars.charAt(randomIndex);
  }
  
  return key;
}

function OpenTabs(numTabs, url) {
  for (let i = 0; i < numTabs; i++) {
    window.open(url, "_blank");
  }
}


function OpenTabNew(url) {
    window.open(url, "_blank");
}
function OpenTabSelf(url) {
    window.open(url, "_self");
}

function ShuffleArray(e)
{
	return e.sort(()=>  Math.random() - 0.5);
}

function CreateKeyShortcut(key_combinations, callback) {
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === key_combinations) {
      callback();
      event.preventDefault();
    }
  });
}

function ArrayToString(arr)
{
	return arr.map(String);
}

function ArrayToNumber(arr)
{
	return arr.map(Number);
}

function CreateCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function CreateSecureCookie(name, value, expirationDays) {
  const cookieValue = encodeURIComponent(value) + '; path=/';
  let cookieOptions = '';

  if (expirationDays) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    cookieOptions += `; expires=${expirationDate.toUTCString()}`;
  }

  if (window.location.protocol === 'https:') {
    cookieOptions += '; secure';
  }
  document.cookie = `${encodeURIComponent(name)}=${cookieValue}${cookieOptions}`;
}

function StoreDataInLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function GetDataFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else {
    return null;
  }
}

function DeleteDataFromLocalStorage(key) {
  localStorage.removeItem(key);
}
