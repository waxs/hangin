/** ----------------------------------------
    Clock
---------------------------------------- */

const clock = {
    _el: document.querySelector('.clock'),
    _color: 'black',
    _defaultColor: 'black',
    _interval: null,

    get date() {
        const date = new Date();
    
        return [
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
        ].join('-');
    },
    
    get time() {
        const date = new Date();
    
        return [
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        ]
        .map(value => ('0' + value).slice(-2))
        .join(':');
    },

    style: function(config = {}) {
        const styles = {
            background: `${this._color}`,
            ...config
        };

        Object.entries(styles).map(([key, value]) => {
            this._el.style[key] = value;
        });
    },

    change(color = 'green') {
        this._color = color;

        setTimeout(() => {
            this._color = this._defaultColor;
        }, 1000);
    },

    update: function() {
        this._el.innerHTML = `
            <span class="time">${ this.time }</span>
        `;

        this.style();
    },

    stop: function() {
        clearInterval(this._interval);
    },

    start: function() {
        this._interval = setInterval(this.update.bind(this), 1000);
        this.update();
    }
};

/** ----------------------------------------
    Log
---------------------------------------- */

const log = message => {
    const now = new Date();
    const el = document.querySelector('#log');
    el.innerHTML += `${ now }: ${ message } <br/>`;
};

/** ----------------------------------------
    Date Format
---------------------------------------- */

const date = date => {
    const digits = array => {
        return array.map(value => {
            return ('0' + value).slice(-2)
        });
    };

    const formatDate = [
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    ];
    
    const formatTime = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ];

    const dateDigits = digits(formatDate);
    const timeDigits = digits(formatTime);

    return `${ dateDigits.join('/') } ${ timeDigits.join(':') }` 
}