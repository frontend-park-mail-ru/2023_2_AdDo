const csrf_token = '';  
const pollMap = new Map();
const resultMap = new Map();
let currId = 1;
const poll = {
    map: pollMap,
    id: null
}

const HOST = 'https://musicon.space';
const PORT = '';

const urlString = window.location.href;
const url = new URL(urlString);
const queryParams = Object.fromEntries(url.searchParams);
const id = queryParams.id;

document.querySelector('.root').addEventListener('click', (event) => {
    switch (event.target.getAttribute('data-section')) {
        case 'OK':
            questionNum = event.target.getAttribute('data-url');
            switch (questionNum) {
                case '1':
                    resultMap.set(event.target.getAttribute('data-id'), getActive().textContent );
                    currId = 2;
                    document.querySelector('[data-section="firstQuestion"]').style.display = 'none';
                    document.querySelector('[data-section="secondQuestion"]').style.display = 'grid';
                    removeActive();
                    break;
                case '2':
                    resultMap.set(event.target.getAttribute('data-id'), getActive().textContent);
                    currId = 3;
                    document.querySelector('[data-section="secondQuestion"]').style.display = 'none';
                    document.querySelector('[data-section="thirdQuestion"]').style.display = 'grid';
                    removeActive();
                    break;
                case '3':
                    resultMap.set(event.target.getAttribute('data-id'), getActive().textContent);
                    currId = 4;
                    document.querySelector('[data-section="thirdQuestion"]').style.display = 'none';
                    document.querySelector('[data-section="fourthQuestion"]').style.display = 'grid';
                    removeActive();
                    break;
                case '4':
                    resultMap.set(event.target.getAttribute('data-id'), getActive().textContent);
                    currId = 5;
                    document.querySelector('[data-section="fourthQuestion"]').style.display = 'none';
                    document.querySelector('[data-section="fifthQuestion"]').style.display = 'grid';
                    removeActive();
                    break;
                case '5':
                    resultMap.set(event.target.getAttribute('data-id'), getActive().textContent);
                    if(resultMap.size < 5) {
                        document.querySelector('.noAnswer').style.display = 'grid';
                    } else {
                        submitForm(id).then(({ ok, status }) => {
                            if (status < 300) {
                                window.parent.postMessage();
                            }
                        });
                    }
                    break;
            }
            break;
        case 'cancel':
            window.parent.postMessage();
            break;
        case 'rating':
            makeActive(event.target);
            break;
        case 'leftArrow':
            switch (event.target.getAttribute('data-url')) {
                case '1':
                    currId = 1;
                    document.querySelector('[data-section="secondQuestion"]').style.display = 'none';
                    document.querySelector('[data-section="firstQuestion"]').style.display = 'grid';
                    break;
                case '2':
                    currId = 1;
                    document.querySelector('[data-section="thirdQuestion"]').style.display = 'none';
                    document.querySelector('[data-section="secondQuestion"]').style.display = 'grid';
                    break;
                case '3':
                    currId = 1;
                    document.querySelector('[data-section="fourthQuestion"]').style.display = 'none';
                    document.querySelector('[data-section="thirdQuestion"]').style.display = 'grid';
                    break;
                case '4':
                    currId = 1;
                    document.querySelector('[data-section="fifthQuestion"]').style.display = 'none';
                    document.querySelector('[data-section="fourthQuestion"]').style.display = 'grid';
                    break;
            }
            break;
        case 'rightArrow':
            switch (event.target.getAttribute('data-url')) {
                case '2':
                    currId = 2;
                    document.querySelector('[data-section="firstQuestion"]').style.display = 'none';
                    document.querySelector('[data-section="secondQuestion"]').style.display = 'grid';
                    break;
                case '3':
                    currId = 3;
                    document.querySelector('[data-section="secondQuestion"]').style.display = 'none';
                    document.querySelector('[data-section="thirdQuestion"]').style.display = 'grid';
                    break;
                case '4':
                    currId = 4;
                    document.querySelector('[data-section="thirdQuestion"]').style.display = 'none';
                    document.querySelector('[data-section="fourthQuestion"]').style.display = 'grid';
                    break;
                case '5':
                    currId = 5;
                    document.querySelector('[data-section="fourthQuestion"]').style.display = 'none';
                    document.querySelector('[data-section="fifthQuestion"]').style.display = 'grid';
                    break;
            }
            break;
    }
});

window.addEventListener('message', function(event) {  
    const urlString = window.location.href;
    const url = new URL(urlString);
    const queryParams = Object.fromEntries(url.searchParams);
    const id = queryParams.id;
    getPoll(id)
        .then(({ ok, status, responseBody }) => {
            if (status === 200) {
                poll.id = responseBody.Id
                responseBody.forEach(key, value => {
                    poll.map.set(key, value);
                });
                renderPoll();
                getcsrf().then(({ status, csrfToken}) => {
                    if (status >= 200 && status < 300) {
                        csrf_token = csrfToken;
                        return;
                    }
                });
                return;
            }
        })
        .catch((error) => {
            console.log(error);
        });;
  });

function makeActive(element) {
    const active = document.querySelector('.active');
    if (active) {
        active.classList.remove('active');
    }
    element.classList.add('active');
}

function getActive() {
    const active = document.querySelector('.active');
    return active;
}

function removeActive() {
    const active = document.querySelector('.active');
    if (active) {
        active.classList.remove('active');
    }
}

async function submitForm(id) {
    const headers = new Headers();
    if (this.csrfToken) {
        headers.append('X-Csrf-Token', csrf_token);
    }
    headers.append('Content-Type', 'application/json');
    const response = await fetch(HOST + PORT + `api/v1/survey/submit/${id}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(resultMap),
        credentials: 'include',
        mode: 'cors',
    });
    if (!response.ok) {
        return {
            ok: false,
            status: response.status,
        };
    }

    return {
        ok: true,
        status: response.status,
    };
}

getPoll(id)
    .then(({ ok, status, responseBody }) => {
        if (status === 200) {
            poll.id = responseBody.Id
            responseBody.forEach(key, value => {
                poll.map.set(key, value);
            });
            renderPoll();
            getcsrf().then(({ status, csrfToken}) => {
                if (status >= 200 && status < 300) {
                    csrf_token = csrfToken;
                    return;
                }
            });
            return;
        }
    })
    .catch((error) => {
        console.log(error);
    });

async function getPoll(id) {
    const headers = new Headers();
    const response = await fetch(HOST + PORT + `api/v1/survey/${id}`, {
        method: 'GET',
        headers,
        credentials: 'include',
        mode: 'cors',
    });
    if (!response.ok) {
        return {
            ok: false,
            status: response.status,
            responseBody: 'Error',
        };
    }
    let data;
    try {
        data = response.status !== 204 ? await response.json() : '';
    } catch (error) {
        console.log(error);
    }
    return {
        ok: true,
        status: response.status,
        responseBody: data,
    };
}

async function getcsrf() {
    const headers = new Headers();
    const response = await fetch(HOST + PORT + `api/v1/get_csrf`, {
        method: 'GET',
        headers,
        credentials: 'include',
        mode: 'cors',
    });
    if (!response.ok) {
        return {
            csrfToken: response.headers.get('X-Csrf-Token'),
            status: response.status,
        };
    }
    return {
        status: response.status,
    };
}

function renderPoll () {
    let counter = 0;
    poll.map.forEach(key, value => {
        switch (counter) {
            case 0:
                addQueston(value, '1', key, 'firstQuestion');
                break;
            case 1:
                addQueston(value, '2', key, 'secondQuestion');
                break;
            case 2:
                addQueston(value, '3', key, 'thirdQuestion');
                break;
            case 3:
                addQueston(value, '4', key, 'fourthQuestion');
                break;
            case 4:
                addQueston(value, '5', key, 'fifthQuestion');
                break;
        }
        counter++;  
    });
}

function addQueston(questionTextContent, dataUrl, key, dataSection) {
    const list = document.querySelector('.surveyList');
    const li = document.createElement('li');
    const question = document.createElement('div');
    question.classList.add('question');
    li.appendChild(question);
    li.classList.add('surveyList__item');
    const questionText = createElement('div');
    questionText.classList.add('big-text');
    questionText.textContent = questionTextContent;
    question.setAttribute('data-section', dataSection);
    if(dataSection === 'firstQuestion') {
        question.style.display = 'grid';
    }
    question.appendChild(questionText);
    const ratingBar = createElement('div');
    ratingBar.classList.add('ratingBar');
    for (let i = 0; i < 11; i++) {
        const ratingNumber = createElement('div');
        ratingNumber.classList.add('ratingNumber');
        ratingNumber.setAttribute('data-section', 'rating');
        if (i > 7) {
            ratingNumber.classList.add('yellow');
        } else if (i > 9) {
            ratingNumber.classList.add('green');
        } else {
            ratingNumber.classList.add('red');
        }
        ratingBar.appendChild(ratingNumber);
    }
    question.appendChild(ratingBar);
    const btnBar = createElement('div');
    btnBar.classList.add('btnBar');
    const leftArrow = createElement('image');
    leftArrow.setAttribute('src', './img/leftArrow.png');
    if(dataUrl !== '1') {
        leftArrow.setAttribute('data-section', 'leftArrow');
        leftArrow.setAttribute('data-url', parseInt(dataUrl) - 1);
    }
    const cancelButton = createElement('button');
    cancelButton.classList.add('defaultButton');
    cancelButton.setAttribute('data-section', 'cancel');
    cancelButton.textContent = 'Отмена';
    const okButton = createElement('button');
    okButton.classList.add('defaultButton');
    okButton.setAttribute('data-section', 'OK');
    okButton.setAttribute('data-id', key);
    okButton.setAttribute('data-url', dataUrl);
    okButton.textContent = 'Ок';
    const rightArrow = createElement('image');
    rightArrow.setAttribute('src', './img/rightArrow.png');
    if(dataUrl !== 5) {
        rightArrow.setAttribute('data-section', 'rightArrow');
        rightArrow.setAttribute('data-url', parseInt(dataUrl) + 1);
    }
    btnBar.appendChild(leftArrow);
    btnBar.appendChild(cancelButton);
    btnBar.appendChild(okButton);
    btnBar.appendChild(rightArrow);
    question.appendChild(btnBar);
    list.appendChild(li);
}