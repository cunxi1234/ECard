function handleCalendar() {
    const pages = document.querySelector('.pages');
    const locale = window.navigator.language || 'en-us';

    let date = new Date();
    let dayNum = date.getDate();
    let month = date.getMonth();
    let dayName = date.toLocaleString(locale, { weekday: 'long' });
    let monthName = date.toLocaleString(locale, { month: 'long' });
    let year = date.getFullYear();

    function getNewDate() {
        if (dayNum < 19 ) {
            dayNum++;
        } else {
            dayNum++;
            changeContext();
        }
        const newDate = new Date(year, month, dayNum);
        dayName = newDate.toLocaleString(locale, { weekday: 'long' });
        monthName = newDate.toLocaleString(locale, { month: 'long' });
    }

    function changeContext() {
        document.getElementsByClassName("container")[0].style = "pointer-events:none;"

        var interval = setInterval(function () {
            clearInterval(interval);
            document.getElementsByClassName("firework")[0].style.display = "block";
            setTimeout(function () {
                switchDiv();
            }, 5000);

        }, 520);
    }

    function switchDiv() {
        var calendar = document.getElementsByClassName("calendar")[0];
        var flipbook = document.getElementsByClassName("flipbook")[0];
        var firework = document.getElementsByClassName("firework")[0];

        (function fade() {
            if ((calendar.style.opacity -= "0.1") < 0) {
                calendar.remove();
                firework.remove();
            } else {
                setTimeout(fade, 80);
            }
        })();

        setTimeout(function () {
            flipbook.style.display = "block";
        }, 500);
    }

    function handleClick(e) {
        getNewDate();
        updateCalendar(e.target);

    }

    function updateCalendar(target) {
        if (target && target.classList.contains('page')) {
            target.classList.add('tear');
            setTimeout(() => {
                pages.removeChild(target);
            }, 800);
        } else {
            return;
        }
        renderPage();
    }

    function renderPage() {
        const newPage = document.createElement('div');
        newPage.classList.add('page');
        newPage.innerHTML = `
		<p class="month">${monthName}</p>
		<p class="day">${dayNum}</p>
		<p class="day-name">${dayName}</p>
		<p class="year">${year}</p>
	    `;
        pages.appendChild(newPage);
    }

    renderPage();
    pages.addEventListener('click', handleClick);
}