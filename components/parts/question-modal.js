const questionModal = {
    template: (function() {/*    
        <div class="modal-mask">
            <button id="start-btn" @click="$emit('closemodal')">受講開始</button>
        </div>
    */}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, ""),

}
