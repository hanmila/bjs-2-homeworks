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
            let clock = {
                callback,
                time,
                canCall: true
            };
            this.alarmCollection.push(clock);
        }
    }

    removeClock(time) {
        this.time = time;
        this.alarmCollection.filter((clock) => clock.time === time);
    }

    getCurrentFormattedTime() {
        console.log(this.time.toLocaleTimeString("ru-Ru", {
            hour: "2-digit", 
            minute: "2-digit"
        }));
    }

    start() {
        if(this.intervalId !== undefined) {
            return this.intervalId;
        }

        setInterval(() => {
            this.alarmCollection.forEach(() => {
                if(this.time = new Date && canCall === true) {
                    this.canCall = false;
                    clock.callback();
                }
            })
        });

        return this.intervalId;
    }

    stop() {
        clearInterval(this.intervalId);
        return null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(this.clock[canCall] = 'true');
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}