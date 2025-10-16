/*

const Toast = Swal.mixin({
    showClass: {
        popup: `
                      animate__animated
                      animate__fadeInDown
                      animate__faster
                    `
    },
    hideClass: {
        popup: `
                      animate__animated
                      animate__fadeOutRight
                      animate__faster
                    `
    },
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});
const inputCountRange = document.querySelector('#count-range')
const characterCountElem = document.querySelector('.characters-count')
const initialCharCount = Number(inputCountRange.getAttribute('min'))
const checkBoxCard = document.querySelector('.checkbox-card')
const passwordPropElems = document.querySelectorAll('.password-prop')
const strengthStatus = document.querySelector('.strength-status')
const generatePasswordElem = document.querySelector('.generated-password')
const generateButton = document.querySelector('.generate-button')
let passwordLength,countTickedInputs = 1, finalPasswordString = null
let passwords = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercases: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/~`"
}
function showMessage(msg,icon){
    Swal.fire({
        title: msg,
        icon: icon
    })
}
function resetDatas(){
    inputCountRange.value = initialCharCount
    characterCountElem.textContent = String(initialCharCount)
    passwordLength = initialCharCount
    passwordPropElems.forEach(input => {
        input.checked = false
    })
    passwordPropElems[0].checked= true
    strengthStatus.className = 'strength-status very-bad'
    generatePasswordElem.textContent = ''
    finalPasswordString = ''
    countTickedInputs = 1
}
function setPasswordLength(event){
    let count = event.target.value
    characterCountElem.textContent = String(count)
    passwordLength = count

}
function setStrengthStatusColor(count){
    switch (count){
        case 1:
            strengthStatus.className = 'strength-status very-bad'
            break
        case 2:
            strengthStatus.className = 'strength-status bad'
            break
        case 3:
            strengthStatus.className = 'strength-status good'
            break
        case 4:
            strengthStatus.className = 'strength-status strong'
            break
        default:
            strengthStatus.className = 'strength-status'
            break;
    }
}
function calculateTickedInput(input){
    let isChecked = input.checked
    if (isChecked){
        countTickedInputs++
    }else {
        countTickedInputs --
    }
    return countTickedInputs
}
function rangeInputsChangeHandler(event){
    countTickedInputs = calculateTickedInput(event.target)
    setStrengthStatusColor(countTickedInputs)
}
function createPassword(text,len){
    console.log(text)
    console.log(len)
    let password = '',random = null,randomChar = null
    for (let i = 1; i <= len ; i++) {
        random = Math.floor(Math.random()* text.length)
        randomChar = text[random]
        password += randomChar
    }
    return password
}
function generateButtonHandler(){
    generatePasswordElem.textContent = ''
    generateButton.disabled = true
    generateButton.style.cursor = 'not-allowed'
    if (!countTickedInputs){
        showMessage('حدااقل یک مورد از چک باکس ها باید انتخاب شود', 'error')
    }else {
        /!*console.log(countTickedInputs)*!/
        generateButton.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="#ffffff"
                stroke-width="4"
                stroke-linecap="round"
                stroke-dasharray="31.4 31.4"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 25 25"
                  to="360 25 25"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
            <span>در حال پردازش</span>
        `
        passwordPropElems.forEach(input => {
            if (input.checked){
                finalPasswordString += passwords[input.dataset.value]
            }
        })
        let password = createPassword(finalPasswordString,passwordLength)
        Toast.fire({
            title: 'پسورد شما با وفقیت ساخته شد',
            icon: 'success',
            didClose: () => {
                generateButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"></path>
                    </svg>
            
                    <span> ایجاد </span>
                `
                generatePasswordElem.textContent = password
                finalPasswordString = ''
                generateButton.disabled = false
                generateButton.style.cursor = 'pointer'
            }
        });


    }
}
inputCountRange.addEventListener('input', setPasswordLength)

passwordPropElems.forEach(input => {
    input.addEventListener('change', rangeInputsChangeHandler)
})
generateButton.addEventListener('click', generateButtonHandler)
window.onload = function (){
    resetDatas()
}

/!*Toast.fire({
    title: 'saved',
    icon: 'success',
    didClose: () => {
        console.log('✅ Toast بسته شد');
    }
});*!/
*/
const Toast = Swal.mixin({
    showClass: {
        popup: `
            animate__animated
            animate__fadeInDown
            animate__faster
        `
    },
    hideClass: {
        popup: `
            animate__animated
            animate__fadeOutRight
            animate__faster
        `
    },
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

const inputCountRange = document.querySelector('#count-range');
const characterCountElem = document.querySelector('.characters-count');
const initialCharCount = Number(inputCountRange.getAttribute('min'));
const passwordPropElems = document.querySelectorAll('.password-prop');
const strengthStatus = document.querySelector('.strength-status');
const generatePasswordElem = document.querySelector('.generated-password');
const generateButton = document.querySelector('.generate-button');

let passwordLength = initialCharCount;
let countTickedInputs = 1;
let finalPasswordString = '';

const passwords = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercases: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/~`"
};

// نمایش پیام
function showMessage(msg, icon) {
    Swal.fire({ title: msg, icon: icon });
}

// ریست اولیه فرم
function resetDatas() {
    inputCountRange.value = initialCharCount;
    characterCountElem.textContent = String(initialCharCount);
    passwordLength = initialCharCount;
    passwordPropElems.forEach((input, index) => input.checked = index === 0);
    countTickedInputs = 1;
    finalPasswordString = '';
    strengthStatus.className = 'strength-status very-bad';
    generatePasswordElem.textContent = '';
}

// تنظیم طول پسورد
function setPasswordLength(event) {
    passwordLength = Number(event.target.value);
    characterCountElem.textContent = String(passwordLength);
}

// ست کردن رنگ strength
function setStrengthStatusColor(count) {
    switch (count) {
        case 1: strengthStatus.className = 'strength-status very-bad'; break;
        case 2: strengthStatus.className = 'strength-status bad'; break;
        case 3: strengthStatus.className = 'strength-status good'; break;
        case 4: strengthStatus.className = 'strength-status strong'; break;
        default: strengthStatus.className = 'strength-status'; break;
    }
}

// محاسبه تعداد checkbox های انتخاب شده
function calculateTickedInput(input) {
    return input.checked ? countTickedInputs + 1 : countTickedInputs - 1;
}

// هندلر تغییر checkbox
function rangeInputsChangeHandler(event) {
    countTickedInputs = Math.max(1, calculateTickedInput(event.target));
    setStrengthStatusColor(countTickedInputs);
}

// ساخت پسورد تصادفی
function createPassword(characters, len) {
    let password = '';
    for (let i = 0; i < len; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// هندلر کلیک دکمه generate
function generateButtonHandler() {
    generatePasswordElem.textContent = '';
    generateButton.disabled = true;
    generateButton.style.cursor = 'not-allowed';

    if (!countTickedInputs) {
        showMessage('حداقل یک گزینه باید انتخاب شود', 'error');
        generateButton.disabled = false;
        generateButton.style.cursor = 'pointer';
        return;
    }

    generateButton.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#ffffff"
            stroke-width="4"
            stroke-linecap="round"
            stroke-dasharray="31.4 31.4"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
        <span>در حال پردازش</span>
    `;

    // بازسازی رشته کاراکترها
    finalPasswordString = '';
    passwordPropElems.forEach(input => {
        if (input.checked) finalPasswordString += passwords[input.dataset.value];
    });

    const password = createPassword(finalPasswordString, passwordLength);

    Toast.fire({
        title: 'پسورد شما با موفقیت ساخته شد',
        icon: 'success',
        didClose: () => {
            generateButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"></path>
                </svg>
                <span> ایجاد </span>
            `;
            generatePasswordElem.textContent = password;
            finalPasswordString = '';
            generateButton.disabled = false;
            generateButton.style.cursor = 'pointer';
        }
    });
}

// Event Listeners
inputCountRange.addEventListener('input', setPasswordLength);
passwordPropElems.forEach(input => input.addEventListener('change', rangeInputsChangeHandler));
generateButton.addEventListener('click', generateButtonHandler);
document.addEventListener('DOMContentLoaded', resetDatas);

