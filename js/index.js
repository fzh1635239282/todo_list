new Vue({
    el: "#app",
    data: {
        lists: [
            {
                id: 1,
                content: "睡觉",
                isFinished: false
            },
            {
                id: 2,
                content: "吃饭",
                isFinished: true
            },
            {
                id: 3,
                content: "打豆豆",
                isFinished: false
            },
            {
                id: 4,
                content: "打打豆豆",
                isFinished: false
            }
        ],
        activeIndex: 0,
        modalBox: false,
        delIndex: -1
    },
    methods: {
        check(i){
            if(this.lists[i].isFinished) {
                this.remove(i);
            } else {
                this.modalBox = true;
                this.delIndex = i;
            }
        },
        remove(i){
            this.lists.splice(i,1);
            this.modalBox = false;
            this.delIndex = -1;
        },
        active(i){
            this.activeIndex = i;
        },
        update(i){
            var cardContent = document.querySelectorAll("#app .card .text")[i];
            this.lists[i].content = cardContent.innerHTML;
        },
        add(){
            if(this.lists[0].content == "") {
                var cardContent = document.querySelector("#app .card .text");
                cardContent.focus();
                return;
            }
            this.lists.unshift({
                id: Date.now(),
                content: "",
                isFinished: false
            });
            var cardContent = document.querySelector("#app .card .text");
            cardContent.focus();
        }
    }
});