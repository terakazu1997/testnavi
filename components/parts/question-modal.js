//受講画面遷移時のモーダル。受講開始ボタンが押されると、モーダルが閉じ、受講が開始する。
const questionModal = {
    template: (function() {/*    
        <div class="modal-mask">
            <button id="start-btn" @click="$emit('closemodal')">受講開始</button>
        </div>
    */}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, ""),

}
