document.addEventListener('DOMContentLoaded', function(){
	//VARIABLE
	const keyBoard = document.querySelector('.virtyal-keyboard');
	const btnKeyInput = document.querySelector('.search__virtyal-keyboard');
	const searcInput = document.getElementById('search-inp');
	const letterConteiner = document.querySelector('.virtyal-keyboard__letter-conteiner');
	const langBtn = document.querySelector('.change-lng');
	const namBtn = document.querySelector('.change-nam');
	const uppercaseBtn = document.querySelector('.big-letters');
	const delBtn = document.querySelector('.del-letters');


	//HIDE SHOW KEYBOARD
	btnKeyInput.addEventListener('click', showKeuboard); 
	function showKeuboard(event){
		event.preventDefault();
		if(keyBoard.classList.contains('show-board')){
			keyBoard.classList.remove('show-board')
		}
		else{
			keyBoard.classList.add('show-board')
		}
	}

	//LOAD KEYBOARD
	const enArr = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
	const ruArr = ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю','ё']
	const namArr = ['1','2','3','4','5','6','7','8','9','0','-','/','(',')','&','@','"','.',',','?','!','#','%','*','+','='];
	let currientLang = enArr;

	function loaLang(){
		letterConteiner.innerHTML = '';
		for(let i=0; i < currientLang.length; i++){
			let nevBtnElement = document.createElement('div');
			nevBtnElement.classList.add('virtyal-keyboard__btn');
			nevBtnElement.classList.add('virtyal-keyboard__event-enter');
			nevBtnElement.innerHTML = currientLang[i];
			letterConteiner.appendChild(nevBtnElement);
		}
		addEventBtn();
	}
	loaLang();

    //CHANGE LANG
	langBtn.onclick = changeLang
	function changeLang(){
		if(currientLang == enArr){
			currientLang = ruArr
		}
		else{
			currientLang = enArr
		}
		loaLang();
	}

    //CHANGE NAM
	namBtn.onclick = changeNam
	function changeNam(){
		if(currientLang == enArr || currientLang == ruArr){
			currientLang = namArr
		}
		else{
			currientLang = enArr
		}
		loaLang();
	}

	//UPPERCASE CHANGE
	uppercaseBtn.onclick = changeUppercase
	function changeUppercase(){
		if(currientLang == enArr || currientLang == ruArr){
			if(letterConteiner.classList.contains('uppercase-activ')){
				letterConteiner.classList.remove('uppercase-activ');
			}
			else{
				letterConteiner.classList.add('uppercase-activ');
			}	
		}
		else{
			letterConteiner.classList.remove('uppercase-activ');
		}
	}

	//ENTER LETTERS
	function addEventBtn(){
		let enterLeter = document.querySelectorAll('.virtyal-keyboard__event-enter');
		for(let i=0; i<enterLeter.length; i++){
			enterLeter[i].addEventListener('click', enterLetters);
		}
	}
	function enterLetters(){
		let currientLetter = this.innerText;
		searcInput.value = searcInput.value + currientLetter;
	}

	//REMOVE LETTERS
	delBtn.onclick = deLletters
	function deLletters(){
		let searchValue = searcInput.value.slice(0,-1);
		console.log(searchValue)
		searcInput.value = searchValue;
	}

});







