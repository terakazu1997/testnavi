const timer= {
    template: (function() {/*
    <div id="timer">
        <p>{{ formatTime }}</p>
    </div>
    */}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, ""),
    data: function() {
        return {
            min: 10,
            sec: 00,
        }
    },
    mounted: function(){
        this.start()
    },
    methods: {
        count: function() {
            if (this.sec <= 0 && this.min >= 1) {
                this.min --;
                this.sec = 59;
            } else {
                this.sec --;
            }
        },
    start: function() {
            var self = this
            setInterval(function() {self.count()}, 1000)
        },
    },
    computed: {
        formatTime: function() {
            var min = (this.min.toString().length < 2) ? '0' +this.min.toString(): this.min.toString()
            var sec = (this.sec.toString().length < 2) ? '0' + this.sec.toString(): this.sec.toString()
            return min + ":" + sec
        }
    },
    watch: {
        sec: function(){
            if(this.min ===0 && this.sec === 0){
                this.$emit('checkAnswer')
            }
        }
    }
}
