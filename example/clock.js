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
            width: 'auto',
            padding: '0.5rem',
            borderRadius: '0.25em',
            background: `${this._color}`,
            fontFamily: 'Helvetica',
            color: 'white',
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            transition: 'background 0.2s ease',
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
            <span class="date" style="font-size: 0.75em">${ this.date }</span>
            <div class="time">${ this.time }</div>
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