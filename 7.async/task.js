class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        this.time = new Date({ hour: '2-digit', minute: '2-digit' });
        this.callback = () => {

        };

        if(!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        } else if(this.time in this.alarmCollection) {
            console.warn('Уже присутствует звонок на это же время');
        } else {
            const clock = {
                callback,
                time,
                canCall: true
            };
            this.alarmCollection.push(clock);
        }
    }

    removeClock(time) {
        this.time = time;
        this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
    }

    getCurrentFormattedTime() {
        let time = new Date();
        return time.toLocaleTimeString("ru-RU", { hour: '2-digit', minute: '2-digit' });
    }

    start() {
        if (this.intervalId) {
            return this.intervalId;
        } else {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((clock) => {
                    if (clock.time === this.getCurrentFormattedTime() && clock.canCall) {
                        clock.canCall = false;
                        clock.callback();
                    }
                });
            }, 1000);
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((clock) => {
            clock.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}