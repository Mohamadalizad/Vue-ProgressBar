const app = Vue.createApp({
    data() {
        return {
            status: 0,
            isFirst: true,
            isCenter: false,
            isLast: false,
            url:"http://digikala.com",
        }
    },
    methods: {
        Increase() {
            if (this.status == 100) {
                return;
            }
            if (this.status >= 30 && this.status <= 70) {
                this.isFirst= false;
                this.isCenter= true;
                this.isLast= false;
            }
            else if (this.status >= 70){
                this.isFirst= false;
                this.isCenter= false;
                this.isLast= true;
            }
            this.status++;
        },
        Decreas() {
            if(this.status>=0 && this.status<=30){
                this.isFirst= true;
                this.isCenter= false;
                this.isLast= false;
            }
            else if (this.status >= 30 && this.status <= 70) {
                this.isFirst= false;
                this.isCenter= true;
                this.isLast= false;
            }
            else if (this.status >= 70){
                this.isFirst= false;
                this.isCenter= false;
                this.isLast= true;
            }
            this.status--;
        },
    },
})
app.mount("#app")